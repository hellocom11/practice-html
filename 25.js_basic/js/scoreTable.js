function writeTableOfScore(){
        // let userName = prompt("당신의 이름을 말해보세요")
        // let userAge = prompt(userName + "님의 나이는 몇 살인가요?")
    //    alert(userAge + "살" +  userName +"님 환영합니다")
      let userName = prompt("당신의 이름을 말해보세요")
      let user1 = Number(prompt(userName + "님의 국어 점수는?"))
      let user2 = Number(prompt(userName + "님의 영어 점수는?"))
      let user3 = Number(prompt(userName + "님의 수학 점수는?"))
      let scoreAver = (user1+user2+user3)/3
      alert("["+ userName + "님의 평균점수는" + scoreAver + "점입니다.]")
       document.write(`${userName}님의 평균 점수는${scoreAver}점 입니다]`)


     document.write(`
     <table class="grade">
    <caption>${userName}님의 성적표</caption>
    <tr>
        <th>국어</th>
        <td>${user1}</td>
    </tr>
    <tr>
        <th>영어</th>
        <td>${user2}</td>
    </tr>
    <tr>
        <th>수학</th>
        <td>${user3}</td>
    </tr>
    <tr>
        <th>합계</th>
        <td>${user1+user2+user3}</td>
    </tr>
    <tr>
        <th>평균</th>
        <td>${scoreAver}</td>
    </tr>
   </table>
     `)
    }