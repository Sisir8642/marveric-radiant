import { Card, CardContent } from '@/components/ui/card';

export const revalidate = 300; // ISR: regenerate every 60 seconds

interface BoardMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  role: 'executive' | 'member';
}


async function getBoardMembers(): Promise<BoardMember[]> {
  const res = await fetch(
    'http://127.0.0.1:8000/api/board-of-directors/',
    { next: { revalidate: 60 } } // ISR cache
  );

  if (!res.ok) {
  return [];
}


  return res.json();
}

// =====================
// Component
// =====================
export default async function BoardOfDirectors() {
  const data = await getBoardMembers();

  const topDirector = data.find(m => m.role === 'executive');
  const otherMembers = data.filter(m => m.role === 'member');

  if (!topDirector) return null;

  return (
    <section
      id="board_of_directors"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Board of Directors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strong leadership guiding long-term strategic vision and governance.
          </p>
        </div>

        {/* Executive Leadership */}
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Executive Leadership
        </h3>

        <div className="flex justify-center mb-16">
          <Card className="bg-white shadow-md border rounded-xl w-110">
            <CardContent className="p-0">

              <div className="w-full h-72 overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-100">
                <img
                  src={topDirector.image}
                  alt={topDirector.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {topDirector.name}
                </h4>

                <p className="text-green-600 font-semibold mb-3 text-sm">
                  {topDirector.title}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {topDirector.description}
                </p>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Board Members */}
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Board Members
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {otherMembers.map(member => (
            <Card
              key={member.id}
              className="bg-white shadow-md border rounded-xl w-100"
            >
              <CardContent className="p-0">

                <div className="w-full h-72 overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h4>

                  <p className="text-green-600 font-semibold mb-3 text-sm">
                    {member.title}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
