import { Injectable } from '@nestjs/common';
import { PaginatedResponseJSON, User, clerkClient} from '@clerk/clerk-sdk-node';

@Injectable()
export class AppService {
  async getHello(req): Promise<any>{
    // pass clerk secret key to the client
    const user = await clerkClient.users.getUser("user_2gxhGBqwzdpRq1ZqCSnshVhWcQ4")

    const OAuthProvider = "google"
    // oauth key
    const oauthKey = await clerkClient.users.getUserOauthAccessToken("user_2gxhGBqwzdpRq1ZqCSnshVhWcQ4", `oauth_${OAuthProvider}`)

    console.log(oauthKey.data[0].token)
    
    return user;
  }
}

