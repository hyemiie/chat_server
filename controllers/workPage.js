const generateShareLink = async (req, res) => {
    console.log("helloooo")
    const { fileId } = req.body; 
    
    console.log('Received fileId:', fileId);
  
    try {
      const file = await Content.findById(fileId);
      if (!file) {
        return res.status(404).json({ message: "File not found" });
      }
  
      if (!file.shareToken) {
        file.shareToken = crypto.randomBytes(16).toString("hex");
        await file.save();
      }
  
      const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
      const shareableLink = `${BASE_URL}/edit/${fileId}/${file.shareToken}`;
      console.log("shareable link", shareableLink)
      res.status(200).json({ shareableLink });
    } catch (error) {
      console.error("Error generating share link:", error);
      res.status(500).json( { message: "Server error" });
    }
  };
  
  
  const getSharedFile = async (req, res) => {
    const { fileId, token } = req.params;
    console.log("params", req.params)
  
    try {
      const file = await Content.findOne({ _id: fileId, shareToken: token });
      if (!file) return res.status(404).json({ message: "Invalid or expired link" });
  
      res.status(200).json({ file });
  
    } catch (error) {
      console.error("Error fetching shared file:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  