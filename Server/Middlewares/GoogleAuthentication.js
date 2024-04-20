const {OAuth2Client}
 = require("google-auth-library");

const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "postmessage"
);

exports.AccessToken = async (req, res, next) => {

  // exchange code for tokens 
  const { tokens } = await oAuth2Client.getToken(req.body.code); 
  // console.log(tokens);

  // getting userinfo
  const ticket = await oAuth2Client.verifyIdToken({
    idToken : tokens.id_token,
    client_id : process.env.CLIENT_ID
  })
  const payload = ticket.getPayload();
  // console.log(payload)

  try {   
    const response = await fetch('http://localhost:4500/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )
    if(!response.ok){
      res.status(401).send({message : "User Unauthorized"})
      return;
    }
    const data = await response.json()
    res.status(200).send({message : "User authenticated successfully ;)", details : data})
  } 
  catch (error) {
    res.status(500).send({message : "Internal server error", details : error})
  }

  next();
};

exports.refreshedAccessToken = async (req, res) => {
  const user = new UserRefreshClient(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    req.body.refreshToken
  );
  const { credentials } = await user.refreshAccessToken(); // obtain new tokens
  res.json(credentials);
};
