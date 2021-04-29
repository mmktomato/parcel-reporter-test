// import { Reporter } from '@parcel/plugin';
const { Reporter } = require("@parcel/plugin");
const fsPromises = require("fs/promises");

// export default new Reporter({
module.exports = new Reporter({
  async report(opts) {
    if (opts.event.type !== "log") {
      // NOTE:
      // "watchStart" event comes here but isn't printed to console.
      // To be precise, it's printed to console once but Parcel seems to delete it.
      opts.logger.log({ message: opts.event.type });

      await fsPromises.appendFile("reporter.log", opts.event.type + "\n");
    }
  }
});
