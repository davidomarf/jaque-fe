# Jaque's Front-End

This project was created with:

- [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.
- **Node.js** v12.13.0

## (anti-) Checklist

- You **can't** upload pictures for new or existing users. It stays with the
  one being fetched from `users.json`.
- You **can't** drag n' drop.
- ~~You **can't** select a role or change the status within the Modal.~~
- You **can't** sort, search, or filter users.
- You **can't** see other views for the users. There's only the list.
- You **can't** delete or update users in the real json.

---

- **HTTP Requests are done within the modules, not in a different helper file.**

- **No `environments` file was used**

- **I used the default Angular module `app.module`**

## (real) Checklist

- You **can** create new users.
- You **can** modify existing users.
- You **can** change the status of a user from within the main list.
- You **have** different content in the Modal if you're creating or updating a user.
- You **can** delete or update users for your current session.

- You **can** now change the role and status of an existing user within the Modal.
  - This updates the role, but not the roleId, which would be far from ideal.

---

- Compodoc works.

## Some other flaws

- I heavily dislike the appearance of the email field. It just hiddenly overflows
  without indicating the existance of a complete email.

- No field is required. You can create empty users.

- You don't have a way to avoid user repetition.

- I didn't move the repetitive things out of the individual files prior to keeping
  the development. The project has heavy duplication for `type`s declaration, and
  `scss` styles.

- The modal module is quite big.

---
