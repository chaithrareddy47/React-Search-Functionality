🔁 What happens when you type in the search box:
1. Whatever you type goes into the input
➡️ That value is stored in the search state.

2. We filter the original full list (listUsers) using that input
js
Copy code
const results = listUsers.filter((user) =>
  user.name.toLowerCase().includes(searchText)
);
➡️ The results (i.e., matching users) are stored in filteredUsers array.

3. Then:
What you type	Matches?	filteredUsers.length	What UI shows
"Leanne"	✅ Yes	1	Show the user
"xyzabc"	❌ No	0	Show "No users found"


✅ Final Summary (in your style 😉):
✔️ Whatever I type goes into the input →
✔️ Then we check: does it match any name in the user list?
✔️ If yes → filteredUsers will have data → length > 0 → show list
❌ If not → filteredUsers is empty → length = 0 → show "No results"