import { useEffect, useState } from "react";
import { getCountries } from "../services/countryService";
import Loader from "../components/Loader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Entities() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCountries = async () => {
    try {
      const data = await getCountries();
      setCountries(data);
    } catch (error) {
      console.error("Error al obtener países:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Listado de países
      </h1>

      <p className="text-slate-600 mb-6">
        Esta sección muestra países consumidos desde la API pública REST Countries.
      </p>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {countries.map((country) => (
            <Card key={country.name.common} className="hover:shadow-lg transition">
              <CardContent className="p-4">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt || country.name.common}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />

                <h2 className="text-lg font-bold text-slate-800 mb-2">
                  {country.name.common}
                </h2>

                <Badge>{country.region}</Badge>

                <p className="text-sm text-slate-600 mt-3">
                  Nombre oficial: {country.name.official}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}

export default Entities;