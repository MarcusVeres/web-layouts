/*
// This is the callback from CodePen's embed script, ei.js
function __CodePenIFrameAddedToPage() {
    makeEmbedsResizeable();
  }
  
  function makeEmbedsResizeable() {
    
    // You don't have to set min and max, but it's kinda useful so that users don't drag them to a weird/bad size.
    var maxWidth = 1000; // calculated below
    var minWidth = 320;
    var minHeight = 150; 
    
    $(".cp_embed_wrapper").each(function() {
      var $wrapper = $(this);
      var $iframe = $wrapper.find("iframe");
      $wrapper.append("<div class='win-size-grip'></div>");
      var originalHeight = $iframe.outerHeight();
      $wrapper.css("height", originalHeight);
      // Can't set this in CSS, otherwise height measurement will be wrong
      $iframe.css("height", "100%");

      $wrapper.resizable({
        handleSelector: "> .win-size-grip",
        onDragStart: function (e, $el, opt) {
          $el.addClass("dragging");
          maxWidth = window.outerWidth;
        },
        onDragEnd: function (e, $el, opt) {
          $el.removeClass("dragging");
        },
        onDrag: function (e, $el, newWidth, newHeight, opt) {
          if (newWidth > maxWidth) {
            newWidth = maxWidth;
          }
          if (newWidth < minWidth) {
            newWidth = minWidth;
          }
          if (newHeight < minHeight) {
            newHeight = minHeight;
          }
          $el.width(newWidth);
          $el.height(newHeight);
          return false;
        }
      });
    });
  }
  */
  






 
 
 // 
 var body = null; 
 var isResizing = false;
 var minResizeHeight = 120;
 var minResizeWidth = 200;
 var target = document.getElementById('resize-target'); // just a prototype -- will set dynamically 
 var targetContainer = document.getElementById('target-container'); // just a prototype -- will set dynamically 
 let sizeAdjuster = document.getElementById('size-adjuster');
 
 // TODO :: Customize JS formatting, or roll out my own 
 function activate() 
 {
     sizeAdjuster.addEventListener('mousedown', widthAdjustMouseDown);
     
     body = document.getElementsByTagName('body')[0];
     body.addEventListener('mousemove', mouseMoving);
     body.addEventListener('mouseup', widthAdjustMouseUp);
} 
activate();
    
function deactivate()
{
    // In reverse order. 
    sizeAdjuster.removeEventListener('mousedown', widthAdjustMouseDown);
    
    body.removeEventListener('mousemove', mouseMoving);
    body.removeEventListener('mouseup', widthAdjustMouseUp);
    
    document.getElementById('seon-wrapper').remove();
}


// 
function widthAdjustMouseDown(element) 
{
    isResizing = true;
}
function widthAdjustMouseUp(element) 
{
    isResizing = false;
}
function mouseMoving(event) 
{
    // TODO :: dynamically set the "target" based on what is being clicked 
    
	if (isResizing) 
    {   
        // console.log( event.clientX );

        // var rect = event.target.getBoundingClientRect();
        var rect = targetContainer.getBoundingClientRect();
        var x = event.clientX - rect.left; //x position within the element.
        var y = event.clientY - rect.top;  //y position within the element.

        if ( x < minResizeWidth ) 
        {
            x = minResizeWidth;
        }
        else if ( x > rect.width )
        {
            x = rect.width;
        }

        if ( y < minResizeHeight ) 
        {
            y = minResizeHeight;
        }
        else if ( y > rect.height )
        {
            y = rect.height;
        }

        // console.log("Left? : " + x + " ; Top? : " + y + ".");

		// var percent = (event.clientX / window.innerWidth * 100);
		// var percent = (x / targetContainer.width * 100);

        target.style.width = x + 'px';					// Width of the editor is where the mouse is dragging. 
        sizeAdjuster.style.left = x + 'px';    

        target.style.height = y + 'px';					// Width of the editor is where the mouse is dragging. 
        sizeAdjuster.style.top = y + 'px';    
	}
}

