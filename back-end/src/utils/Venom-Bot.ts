import { create, Whatsapp } from 'venom-bot';

class VenomClient {
  private static client: Whatsapp;

  private constructor() {}

  public static async getInstance(): Promise<Whatsapp> {
    if (!VenomClient.client) {
      VenomClient.client = await create({
        session: 'mascate',
      });
    }
    return VenomClient.client;
  }
}

export default VenomClient;
