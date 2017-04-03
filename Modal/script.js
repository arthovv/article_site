document.addEventListener("DOMContentLoaded", function () {
      document.addEventListener("keyup", function (event) {
        if (event.keyCode === 27) closeModal();
      }, false);


    var register = document.querySelector('.createAccount-btn');
    register.addEventListener("click", function(){
      document.body.classList.add('modal-open');
      howMuch.innerHTML = (maxLength);
    },false);

    var registerClose = document.querySelector('.close');
    registerClose.addEventListener("click", closeModal, false);


    var registerButton = document.querySelector('.sign-up');
    registerButton.addEventListener("submit",function(event){
        event.preventDefault();
        console.log('zamykam');
        window.setTimeout(closeModal, 1000);
    },false);


    var text = document.querySelector('#fewWords');

    const maxLength= text.getAttribute('maxlength');
    const howMuch = document.querySelector('.howMuchChar');

    text.addEventListener('keyup', howMuchChar, false);


    var checkData = document.querySelectorAll('#firstname, #lastname');
    checkData.forEach(checkName);


    var mailAdress = document.querySelector('#email');
    mailAdress.addEventListener('blur', function(){
      var mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
      var inpMail = this.value;
      if(!mailReg.test(inpMail)){
         this.classList.add('wrong-value') ;
      } else{
              this.classList.remove('wrong-value') ;
            } 
      });

    var inputPassword = document.querySelector('#password');
    inputPassword.addEventListener('keyup', checkpass);

    var enterPassword = document.querySelector('#enterpass');
    enterpass.addEventListener('blur',function(){
      if(!this.value==inputPassword.value) console.log('hasła róznia sie');
    },false);



function howMuchChar() {
    var textLength = this.value.length;
    howMuch.innerHTML = (maxLength - textLength);
}

function closeModal() {
    document.body.classList.remove('modal-open');
    var data = document.querySelectorAll('.sign-up label input');
    for(i=0; i<data.length; i++)
      {
        if(data[i].value)
          data[i].value="";
      }
}

function checkName(value,index){
        checkData[index].addEventListener('blur',function(){
          var nameReg = /^[a-zA-Z\s]{3,}$/;
          var inpValue = this.value;
          if(!nameReg.test(inpValue))
            {
              this.classList.add('wrong-value') ;
            } else 
              {
                this.classList.remove('wrong-value') ;
              } 
        },false);
}


var  passwordStrength = function (password) {
  var strength = 0;

  var regExpArr = [
      /[0-9]/,
      /[a-z]/,
      /[A-Z]/,
      /[!-//:-@[-`{-~]/,
      /.{6}/,
      /.{12}/
  ];



  regExpArr.forEach(function (regexp){
    if(regexp.test(password)){
      strength ++;
    }
  });

  return{
    value: strength,
    max: regExpArr.length
  };
}

function checkpass(password){
  var progress = document.querySelector('#passwordComplete');
  var strength = passwordStrength(this.value);

 progress.value = strength.value;
 progress.max = strength.max;
 
}


});

