function search_item(){
    var obj = [
        {
           "code":"000001",
           "p_name":"책상",
           "date":"2023-01-14",
           "position":"융합과학관 403호",
           "EA": "40EA"
        },
        {
            "code":"000002",
            "p_name":"의자",
            "date":"2023-01-14",
            "position":"융합과학관 403호",
            "EA": "40EA"
         },
         {
            "code":"000003",
            "p_name":"모니터",
            "date":"2023-01-14",
            "position":"융합과학관 403호",
            "EA": "40EA"
         },
         {
            "code":"000004",
            "p_name":"데스크탑",
            "date":"2023-01-14",
            "position":"융합과학관 403호",
            "EA": "40EA"
         },
         {
            "code":"000001",
            "p_name":"책상",
            "date":"2023-01-14",
            "position":"융합과학관 404호",
            "EA": "40EA"
         },
         {
             "code":"000002",
             "p_name":"의자",
             "date":"2023-01-14",
             "position":"융합과학관 404호",
             "EA": "40EA"
          },
          {
             "code":"000003",
             "p_name":"모니터",
             "date":"2023-01-14",
             "position":"융합과학관 404호",
             "EA": "40EA"
          },
          {
             "code":"000004",
             "p_name":"데스크탑",
             "date":"2023-01-14",
             "position":"융합과학관 404호",
             "EA": "40EA"
          }
     ];
    var json = JSON.stringify(obj);
    var code = document.querySelector('#insert_code');
    if(code.value == "")
    {
        alert("물품코드를 입력하지 않았습니다.");
    }
    else{
        const ul = document.getElementById('item_list');
        const items = ul.getElementsByTagName('li');
        if(items.length > 0)  {
            for(i = items.length - 1; i >= 0; i--)
            {
                items[i].remove();
            }
        }

        var cnt = 0;
        for(i = 0; i < obj.length; i++)
        {
            if(obj[i]['code'] == code.value)
            {
                var plusUl = document.createElement('li');
                // plusUl.style.color = 'white';
                plusUl.innerHTML =  "<li>"+ obj[i]['code'] + " " + obj[i]['p_name'] + " " + obj[i]['position'] + " " + obj[i]['date'] + " " + obj[i]['EA']+" </li>";
                document.getElementById('item_list').appendChild(plusUl);
                cnt++;
            }
        }
        if(cnt == 0)
        {
            alert("물품코드를 확인해주세요.");
        }
    }
}