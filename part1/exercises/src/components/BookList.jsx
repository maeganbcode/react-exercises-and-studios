export default function BookList() {
   let pageTitle = "Books Ive Read This Month";
   let book1 = "https://th.bing.com/th?id=OSK.47b3e6e6cede65aab9f6db3383fa1def&w=102&h=102&c=7&o=6&dpr=1.4&pid=SANGAM";
   let book2 = "https://i.thriftbooks.com/api/imagehandler/m/F4BB8E035161667A804EF3EC2193DCCDAC63435D.jpeg";
   let book3 = "https://th.bing.com/th?id=OPHS.gMQ45aEis8TuVQ474C474&w=108&h=168&c=8&pcl=f5f5f5&o=5&dpr=1.4&pid=21.1";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The seven husbands of Evelyn Hugo" />
         <img src={book2} alt="Never Lie" />
         <img src={book3} alt="Keep it in the family" />
      </div>      
   );
}