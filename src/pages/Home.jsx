import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountries } from "../services/countryService";
import Loader from "../components/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCountries = async () => {
    try {
      const data = await getCountries();
      setCountries(data.slice(0, 8));
    } catch (error) {
      console.error("Error al cargar países:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <section>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          🌎 World Explorer
        </h1>

        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
          Aplicación SPA creada con React, Vite, React Router, Axios y Shadcn.
          Permite explorar países usando una API pública.
        </p>

        <Button asChild>
          <Link to="/entities">Ver países</Link>
        </Button>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        Países destacados
      </h2>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {countries.map((country) => (
            <Card key={country.name.common}>
              <CardContent className="p-4">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt || country.name.common}
                  className="w-full h-28 object-cover rounded-md mb-3"
                />

                <h3 className="font-bold text-slate-800">
                  {country.name.common}
                </h3>

                <p className="text-sm text-slate-600">
                  Región: {country.region}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;