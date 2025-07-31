import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const q = query(contactsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const contactData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt:
            doc.data().createdAt?.toDate().toLocaleDateString() || "N/A",
        }));

        setContacts(contactData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contacts: ", error);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-[#AFFE14]">
        Contact Enquiries Dashboard
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-4 text-left border border-gray-700">Date</th>
              <th className="p-4 text-left border border-gray-700">Name</th>
              <th className="p-4 text-left border border-gray-700">Company</th>
              <th className="p-4 text-left border border-gray-700">Email</th>
              <th className="p-4 text-left border border-gray-700">Phone</th>
              <th className="p-4 text-left border border-gray-700">Industry</th>
              <th className="p-4 text-left border border-gray-700">Website</th>
              <th className="p-4 text-left border border-gray-700">Source</th>
              <th className="p-4 text-left border border-gray-700">Budget</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact.id}
                className="hover:bg-gray-800 transition-colors"
              >
                <td className="p-4 border border-gray-700">
                  {contact.createdAt}
                </td>
                <td className="p-4 border border-gray-700">{contact.name}</td>
                <td className="p-4 border border-gray-700">
                  {contact.company}
                </td>
                <td className="p-4 border border-gray-700">{contact.email}</td>
                <td className="p-4 border border-gray-700">{contact.phone}</td>
                <td className="p-4 border border-gray-700">
                  {contact.industry}
                </td>
                <td className="p-4 border border-gray-700">
                  {contact.website}
                </td>
                <td className="p-4 border border-gray-700">{contact.source}</td>
                <td className="p-4 border border-gray-700">{contact.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {contacts.length === 0 && (
        <div className="text-center py-8 text-gray-400">No enquiries found</div>
      )}
    </div>
  );
}
