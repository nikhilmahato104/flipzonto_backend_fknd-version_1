import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const date = moment().subtract(83, 'd').format();

const commitMessages = [
    "init: setup Flipzonto node project",
    "feat: added EJS templating engine support",
    "feat: created base layout.ejs template",
    "fix: navbar button not redirecting properly",
    "feat: added 'Add Product' button in admin panel",
    "fix: login form validation issue",
    "chore: cleaned up unused CSS in dashboard",
    "feat: built retailer dashboard UI",
    "fix: bug in category filtering logic",
    "feat: added sidebar toggle for mobile view",
    "refactor: moved routes to separate files",
    "feat: integrated MongoDB connection",
    "fix: resolved session not saving in express-session",
    "feat: added 'Place Order' functionality for retailer",
    "fix: crash on empty cart checkout",
    "feat: added order history page",
    "fix: bug in total price calculation",
    "chore: improved EJS templating for reusability",
    "feat: enabled image upload for product listings",
    "fix: date format error in invoice generation",
    "feat: added product quantity update option",
    "fix: fixed bug in product delete route",
    "feat: implemented flash messages using connect-flash",
    "fix: duplicate entry issue on product form",
    "feat: added admin middleware for route protection",
    "fix: sidebar collapse not working in Firefox",
    "feat: added logout route with confirmation",
    "fix: broken link on footer page",
    "chore: optimized loading speed for dashboard",
    "feat: added CSV export for retailer orders",
    "fix: backend crash when product data missing",
    "feat: dynamic form fields for category creation",
    "fix: search query not returning exact match",
    "chore: added favicon to Flipzonto pages",
    "feat: created homepage banner slider",
    "fix: blank page on /retailer/orders",
    "feat: added product view count tracking",
    "fix: missing auth check in order post route",
    "feat: implemented OTP verification for login",
    "chore: removed console logs from user routes",
    "fix: alignment issue in product card",
    "feat: added filter by brand on search",
    "fix: price not updating after edit",
    "feat: implemented pagination for orders",
    "fix: duplicate retailer showing in list",
    "feat: added confirmation before delete product",
    "fix: dashboard charts not rendering in Firefox",
    "chore: updated README with setup steps",
    "feat: added email alert on successful order",
    "fix: major bug in quantity update on cart page"
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
