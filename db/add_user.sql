insert into users (name, email, is_admin)
values (${name}, ${email}, false)
RETURNING user_id; 
