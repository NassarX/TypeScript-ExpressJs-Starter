class App {
	// Loads your dotenv file
	public loadConfiguration (): void {
    console.info('Configuration :: Booting @ Master...');
  }

  // Loads the Database Pool
	public loadDatabase (): void {
    console.info('Database :: Booting @ Master...');
	}

  // Loads amqp Server connection
	public loadAmqp (): void {
    console.info('Server :: Booting @ Master...');
	}

	// Loads your Server
	public loadServer (): void {
    console.info('Server :: Booting @ Master...');
	}
}

export default new App;
