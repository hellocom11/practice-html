function writeTable(name,ko,en,ma,aver){
    document.write(`
    <table class="grade">
   <caption>${name}성적표</caption>
   <tr>
       <th>국어</th>
       <td>${ko}</td>
   </tr>
   <tr>
       <th>영어</th>
       <td>${en}</td>
   </tr>
   <tr>
       <th>수학</th>
       <td>${ma}</td>
   </tr>
   <tr>
       <th>합계</th>
       <td>${ko+en+ma}</td>
   </tr>
   <tr>
       <th>평균</th>
       <td>${aver}</td>
   </tr>
  </table>
    `)
}