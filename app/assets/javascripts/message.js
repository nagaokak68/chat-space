$(function(){ 

  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message__contents">
         <div class="mainchat__contents__message">
           <div class="mainchat__contents__message__info">
              <div class="mainchat__contents__message__info__name">
              ${message.user_name}
              </div>
              <div class="mainchat__contents__message__info__data">
              ${message.created_at}
              </div>
           </div>
         </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message__contents">
         <div class="mainchat__contents__message">
           <div class="mainchat__contents__message__info">
            <div class="mainchat__contents__message__info__name">
            ${message.user_name}
            </div>
            <div class="mainchat__contents__message__info__data">
            ${message.created_at}
            </div>
          </div>
         </div>
         <div class="mainchat__contents__message__text">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.mainchat__contents').append(html);
    $('form')[0].reset();
    $('.mainchat__contents').animate({ scrollTop: $('.mainchat__contents')[0].scrollHeight}, "fast");
    $(".mainchat__footer__btm").prop("disabled", false);
  })
  .fail(function() {
    alert ('メッセージ送信に失敗しました');
    $(".mainchat__footer__btm").prop("disabled", false);
  });
})
});