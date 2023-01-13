function login(){
    var obj = [
        {
           "id":"mindol",
           "password":"1234",
           "name":"심민석",
           "department":"컴퓨터공학과"
        },
        {
            "id":"jongu",
            "password":"1234",
            "name":"박종현",
            "department":"컴퓨터공학과"
         }
     ];
    var json = JSON.stringify(obj);
    var id = document.querySelector('#login_id');
    var pw = document.querySelector('#login_pw');
    if(id.value == "" || pw.value == "")
    {
        alert("아이디 또는 비밀번호를 입력하지 않았습니다.");
    }
    else{
        for(i = 0; i < obj.length; i++)
        {
            if(obj[i]['id'] == id.value)
            {
                alert(obj[i]['name']);
                var cast = {
                    "name" : obj[i]['name'],
                    "department" : obj[i]['department'],
                    "loginmng" : true
                };
                
                // Json Object를 저장하기
                localStorage.setItem("cast", JSON.stringify(cast));
                location.href = "login_index.html";
                break;
            }
            if(i == obj.length-1)
            {
                alert("아이디 또는 비밀번호를 확인해주세요.");
            }
        }
    }
}