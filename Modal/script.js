document.addEventListener("DOMContentLoaded", function () {
    


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
          this.style.borderColor = 'red';
        } else{
                this.style.borderColor = 'black';
              } 
      })




function howMuchChar() {
    console.log(maxLength);
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
          if(nameReg.test(inpValue))console.log('wszystko ok');
            else console.log('popraw');
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

  console.log('passmoc');

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

  console.log('checkpass: '+this.value);
 progress.value = strength.value;
 progress.max = strength.max;
 console.log(progress.value);
}

var input = document.querySelector('#password');
input.addEventListener('keyup', checkpass);

});


document.addEventListener("keyup", function (event) {
    if (event.keyCode === 27) closeModal();
}, false);

/*function closeModal() {
    document.body.classList.remove('modal-open');
    var data = document.querySelectorAll('.sign-up label input');
    console.log(data.length);
    for(i=0; i<data.length; i++)
      {
        if(data[i].value)
          data[i].value="";
      }
}
*/
