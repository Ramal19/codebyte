app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = await readUsers();

  const user = users.find((u) => u.username === username);
  if (!user) return res.status(401).json({ message: "İstifadəçi tapılmadı" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Şifrə səhvdir" });

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    SECRET,
    { expiresIn: "30d" }
  );

  // Burada həm tokeni, həm də istifadəçinin digər məlumatlarını göndəririk
  res.json({ 
    token, 
    role: user.role, 
    username: user.username, 
    email: user.email,
    profilePic: user.profilePic || "" // Əgər şəkli yoxdursa, boş string göndərsin
  });
});