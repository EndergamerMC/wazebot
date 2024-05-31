import mongoose from "mongoose";

const urschema = new mongoose.Schema({
    userId: { type: String, required: true },
    erinnerungen: [
        {
            link: { type: String, required: true },
            kommentar: { type: String, required: true },
            erstelltAm: { type: Date, default: Date.now },
        }
    ],
    gelösteErinnerungen: [
        {
            link: { type: String, required: true },
            kommentar: { type: String, required: true },
            gelöstMarkiert: { type: Date, default: Date.now },
        }
    ],
    ungelösteErinnerungen: [
        {
            link: { type: String, required: true },
            kommentar: { type: String, required: true },
            ungelöstMarkiert: { type: Date, default: Date.now },
        }
    ]
});

const Erinnerung = mongoose.models.Erinnerung || mongoose.model('Erinnerung', urschema);
export default Erinnerung;