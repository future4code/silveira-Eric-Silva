import axios from "axios";
import { baseURL } from "./baseUrl";
import { user } from "./ex1";


const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };

  const main = async() =>{
    try {
     const result = await sendNotifications()
     console.log(result)
    } catch (error) {
      
    }
  }
  main()
