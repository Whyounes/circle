/*
 * Circle.js
 * v0.1 - 2014
 * https://github.com/Whyounes/circle
 * (c) RAFIE Younes; MIT License
 */

(function(){
    "use strict";

    var Circle = window.Circle = function( options ) {
        if( ! options.id || ! options.values || ! Array.isArray( options.values ) ) return; 
        this._id = options.id;
        this._elem = document.getElementById( this._id );
        if( ! this._elem ) return;

        this._stroke = options.width || 10;
        this._radius = options.radius || 70;
        this._text = options.text || "";
        this._values = options.values;
        this._canvasSize = ( this._radius * 2 ) + ( this._stroke * 2 );
        this._x = this._canvasSize / 2;
        this.canvasHTML = "<canvas id='" + 
            this._id +"_canvas' width='" + 
            this._canvasSize + "' height='" + 
            this._canvasSize + "'></canvas>";
        
        this.textHTML = "<span style='position:absolute; top:0;bottom:0;left:0;right:0; text-align:center; font-size:" + ( this._radius * 0.6 ) + "px; line-height:" + this._canvasSize + "px;'>" + this._text +"</span>";
        
        this.create();
    };
    
    Circle.prototype = {
        isCanvasSupported : function(){
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        },
        verifyValues : function(){
            var value,
                count = 0;
            
            for( value in this._values ){
                count += this._values[ value ].percent;
            }//for
            if( count < 100 )  this._values.push( { percent: ( 100 - count ), color: "#FFF" } );
        },
        drawCircle: function(){
            this._canvas = document.getElementById( this._id + '_canvas' );
            this._context = this._canvas.getContext( "2d" );
            
            var startAngle = 0,
                endAngle = 0,
                value;
            
            for( value in this._values ){
                endAngle = this._percentToAngle( this._values[ value] .percent );
                this.drawArc( this._values[ value ], startAngle, endAngle );
                startAngle += endAngle;
            }//for
        },
        drawArc: function( value, start, end ){
            end+=start;
            this._context.beginPath();
            this._context.arc( this._x, this._x, this._radius, start, end );
            this._context.strokeStyle = value.color;
            this._context.lineWidth = this._stroke;
            this._context.stroke();
            this._context.closePath();
        },
        wrap: function( inner ){
            return "<div style='position:relative; display:inline-block;'>" + inner +"</div>";
        },
        generateHTML: function(){
            var html = "";
            html += this.wrap( this.canvasHTML + this.textHTML );
            this._elem.innerHTML = html;
        },
        _percentToAngle: function( percent ){
            return ( ( ( ( percent / 100 ) * 360 ) * Math.PI ) / 180 );
        },
        create: function(){
            this.verifyValues();
            this.generateHTML();
            this.drawCircle();
        }
    };

})();
