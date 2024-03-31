import Button from "../../components/elements/button/Button";
import Label from "../../components/elements/label";
import Input from "../../components/fragments/input";

const ContactSection = () => {
  return (
    <section id="kontak">
      <div className="bg-orange-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            Hubungi Kami
          </h2>
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <form>
              <div className="mb-4">
                <Input
                  label={"Nama"}
                  name={"name"}
                  placeholder={"masukan nama anda"}
                  type={"text"}
                />
              </div>
              <div className="mb-4">
                <Input
                  label={"Email"}
                  name={"email"}
                  placeholder={"Masukkan alamat email Anda"}
                  type={"email"}
                />
              </div>
              <div className="mb-6">
                <Label htmlFor={"message"} label={"Pesan"} />
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-orange-500"
                  rows={4}
                  placeholder="Tuliskan pesan Anda di sini"
                  required
                ></textarea>
              </div>

              <Button
                className={
                  "bg-orange-500 text-white w-full px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-300"
                }
                label={"Kirim Pesan"}
                type={"submit"}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
