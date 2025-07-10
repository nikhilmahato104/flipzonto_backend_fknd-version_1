import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const date = moment().subtract(, 'd').format();

const commitMessages = [
  "setup project files",
  "added ejs support",
  "created layout template",
  "fixed navbar link",
  "added add-product button",
  "login validation fixed",
  "cleaned up CSS",
  "built dashboard UI",
  "fixed category filter",
  "sidebar toggle working",
  "separated route files",
  "connected to MongoDB",
  "session issue resolved",
  "added place-order feature",
  "checkout crash fixed",
  "order history added",
  "fixed total price bug",
  "refined ejs components",
  "enabled image upload",
  "fixed invoice date format",
  "added quantity update",
  "delete product bug fixed",
  "added flash messages",
  "removed duplicate product issue",
  "admin route protection added",
  "fixed sidebar collapse",
  "logout route added",
  "footer link fixed",
  "dashboard speed improved",
  "export orders to CSV",
  "product crash fixed",
  "added category form fields",
  "search accuracy improved",
  "added favicon",
  "homepage slider created",
  "fixed retailer orders page",
  "product views tracked",
  "auth check on orders",
  "otp verification added",
  "removed extra console logs",
  "fixed product card alignment",
  "brand filter added",
  "edit price bug fixed",
  "pagination for orders added",
  "fixed retailer list duplicates",
  "confirmation before delete",
  "fixed dashboard chart issue",
  "readme updated",
  "email alert for orders",
  "fixed quantity update bug"
];


const randomMessage = commitMessages[Math.floor(Math.random() * commitMessages.length)];

const data = {
    date: date,
};


jsonfile.writeFile(path, data, () => {
    simpleGit()
        .add([path])
        .commit(randomMessage, { '--date': date })
        .push()
        .then(() => {
            console.log(`✅ Commit pushed: "${randomMessage}"`);
        })
        .catch(err => console.error("❌ Commit failed:", err));
});
