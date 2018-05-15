
      $(document).ready(function(){
    
        
        var src1= 'https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png'
        var index = streams.home.length - 1;
        var dt = new Date()
        var utcDate = dt.toUTCString();
        var date = new Date(utcDate).toString()
        var timeago = jQuery.timeago(new Date())
        

        
        var $body = $('body');
        $body.html('');
        $body.append([$("<h1> Little Treats</h1>"), $("<img></img>")] )
        $('img').attr({'src': src1, "align": "right"})

        for(var index = streams.home.length-1; index>=0; index--){
          var tweet = streams.home[index];
          var $tweet = $('<div></div><br>');
          $tweet.append([date, timeago, $('<br><br>')])

          var $selector = $('<a></a>')
          $selector.attr({'href': '#', 'target': '_self','class': 'username', 'data-user': tweet.user,});
          $selector.text('@' + tweet.user + ' : ' + tweet.message);
      
    
          $(".username").on('click', function(event){
              event.preventDefault()
            var $2body = $('body');
             $2body.html('');
             $2body.append([$("<h1> Little Treats</h1>"), $("<img></img>")] )
              $('img').attr({'src': src1, "align": "right"})

          for(var index = streams.home.length-1; index>=0; index--){
            if(streams.home[index].user === $(this).data('user')){
              var $2tweet = $('<div></div><br>');

             $2tweet.append([date, timeago, $('<br><br>')])
             var $person = $('<p></p>')
             $person.text('@' + streams.home[index].user + ' : ' + streams.home[index].message )
             $person.appendTo($2tweet);
             $2tweet.appendTo($2body)
            
            }}             
          })
          $selector.appendTo($tweet);
          $tweet.appendTo($body);
    
        }



      });