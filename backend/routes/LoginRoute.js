router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username: username, password: password });
      if (user) {
        res.send(user);
      } else {
        return res.status(400).json({ message: "login fail" });
      }
    } catch (error) {
      return res.status(400).json({ error });
    }
  });
  
    module.exports = router;