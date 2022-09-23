import * as dotenv from 'dotenv';
import app from './app.js'

dotenv.config();

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})