function Rotate(obj,json){
    this.target = obj[0];
    this.path = json.path || null;
    this.isIE = $.browser.msie;
    this.oSwitch = true;
    this.oTimer = null;
    this.i = 2;
    this.j = -2;
    if(this.isIE){
        this.i = 0.001;
        this.j = 0.001;
    }
    this.init();
  }
  Rotate.prototype = {
      init:function(){
          var self = this;
          if (this.path === "r") {
              this.oTimer = setInterval(function(){self.rotateRight();},30);    
          }else{    
              this.oTimer = setInterval(function(){self.rotateLeft();},30);            
          };
      },
      rotateLeft : function(){
          if (this.isIE) {
              this.ieLeft();
          }else{
              this.left();
          };
      },
      left : function(){
          var self = this.target;
          if(this.oSwitch){
              this.i = this.i-0.1;
              if(this.i<=-2){this.oSwitch = false};
          }else{
              this.i = parseFloat(this.i+0.1);
              if(this.i==2){this.oSwitch = true};
          }
          self.style.MozTransform = 'rotate('+this.i+'deg)';
          self.style.WebkitTransform = 'rotate('+this.i+'deg)';
      },
      ieLeft:function(){
          var self = this.target;
          if(this.oSwitch){
              this.i =  parseFloat(this.i+0.001);
              this.j =  -parseFloat(this.j+0.001);
              if(this.i>=0.02){this.oSwitch = false;}
          }else{
              this.i =  parseFloat(this.i-0.001);
              this.j =  -parseFloat(this.j-0.001);
              if(this.i<=-0.02){this.oSwitch = true;}
          }
          self.style.filter = 'progid:DXImageTransform.Microsoft.Matrix(SizingMethod=auto expand,FilterType=bilinear,M11=1,M12='+this.i+',M21='+this.j+',M22=1)';
      },
      rotateRight:function(){
          if (this.isIE) {
              this.ieRight();
          }else{
              this.right();
          };
      },
      right:function(){
          var self = this.target;
          if(this.oSwitch){
              this.j = parseFloat(this.j+0.15);
              if(this.j>=2){this.oSwitch = false};
          }else{
              this.j = parseFloat(this.j-0.15);
              if(this.j<=-2){this.oSwitch = true};
          }
          self.style.MozTransform = 'rotate('+this.j+'deg)';
          self.style.WebkitTransform = 'rotate('+this.j+'deg)';
      },
      ieRight:function(){
          var self = this.target;
          if(this.oSwitch){
              this.i =  parseFloat(this.i+0.002);
              this.j =  -parseFloat(this.j+0.002);
              if(this.i>=0.1){this.oSwitch = false};
          }else{
              this.i =  parseFloat(this.i-0.002);
              this.j =  -parseFloat(this.j-0.002);
              if(this.i<=-0.02){this.oSwitch = true};
          }
          self.style.filter = 'progid:DXImageTransform.Microsoft.Matrix(SizingMethod=auto expand,FilterType=bilinear,M11=1,M12='+this.i+',M21='+this.j+',M22=1)';
      }
  };