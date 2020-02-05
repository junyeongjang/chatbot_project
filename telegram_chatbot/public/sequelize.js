// 사용자 로딩
function getUser() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        var users = JSON.parse(xhr.responseText);
        console.log(users);
        var tbody = document.querySelector('#chat-form  tbody');
        tbody.innerHTML = '';
        users.map(function (chat) {
          var row = document.createElement('tr');
          row.addEventListener('click', function () {
            getComment(chat.keyword);
          });
          var td = document.createElement('td');
          td.textContent = chat.keword;
          row.appendChild(td);
          td = document.createElement('td');
          td.textContent = chat.story;
          row.appendChild(td);
        });
      } else {
        console.error(xhr.responseText);
      }
    };
    xhr.open('GET', '/chat');
    xhr.send();
  }


  /// 사용자 등록 시
document.getElementById('chat-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = e.target.keyword.value;
  var story = e.target.story.value;

  if (!name) {
    return alert('키워드을 입력하세요');
  }
  if (!story) {
    return alert('내용를 입력하세요');
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('POST', '/chat');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ name: name, story: story}));
  e.target.keyword.value = '';
  e.target.story.value = '';
});

