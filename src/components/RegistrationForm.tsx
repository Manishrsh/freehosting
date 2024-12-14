import React, { useState } from "react";
import { Github, Twitter, Linkedin, X } from "lucide-react";

interface FormData {
  githubUrl: string;
  siteName: string;
  fileName:string;
}

const RegistrationForm = ({ onGetExited }: { onGetExited: () => void }) => {
  const [AddFileName , setAddFileName] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    githubUrl: "",
    siteName: "",
    fileName:""
  });




  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-zinc-900 p-8 rounded-xl max-w-md w-full">
        <div className="relative">
          <X
            size={24}
            onClick={onGetExited}
            className="absolute right-4 cursor-pointer text-gray-300 hover:text-gray-500"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Complete Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="githubUrl"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              GitHub URL
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/username/repo"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="siteName"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Site Name (Subdomain)
            </label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              placeholder="my-awesome-site"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
              pattern="[a-z0-9-]+"
              title="Only lowercase letters, numbers, and hyphens are allowed"
            />

          </div>
          {
              AddFileName && (
                <div>
                  <label
                    htmlFor="fileName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    File Name
                  </label>
                  <input
                    type="text"
                    id="fileName"
                    name="fileName"
                    value={formData.fileName}
                    onChange={handleChange}
                    placeholder="app.html"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                    pattern="[a-z0-9-]+"
                    title="Only lowercase letters, numbers, and hyphens are allowed"
                  />
                </div>
              )

          }
          
          
          <div className="flex flex-col items-center space-y-4">
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
  >
    Submit
  </button>
  <div className="w-full flex justify-end">
    <button
      type="submit"
      onClick={() => setAddFileName(!AddFileName)}
      className="w-2/4 bg-gradient-to-r from-zinc-700 to-slate-800 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
    >
      Only ( Html , Css , Js )
    </button>
  </div>
</div>

        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
