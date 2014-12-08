        

               for (var i=0; i<localStorage.length; i++) {
                      // Get the key for the item at the current position.
                      var key = localStorage.key(i);
                     // Get the item that's stored with this key.
                     var item = localStorage[key];
                   $('#list').prepend('<p>' + item + '</p>');  

                                                            }
                   
              		 

                     
                  
                  $('p').click(function() {
                            var text = $(this).text();
                            // do something with the text
                            
                             $(this).remove();
                             localStorage.removeItem("u"+text);
                        });

                    $("#butt").click(function()
                    {

                       var entered = document.getElementById("myText").value;
                       document.getElementById("myText").value="";
                     
                       if(entered!="")
                       {
                       	 
                       	 var temp='<p>' + entered + '</p>';
                         $('#list').prepend(temp);  
                
						              localStorage["u" + entered ] = entered;
						      
                        
                       }
                    });
  