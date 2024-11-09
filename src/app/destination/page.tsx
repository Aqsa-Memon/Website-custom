import Image from "next/image";


export default function Destinations() {
  return (
    <div>
      <main className="destinations">
        <h1>Explore Our Top Destinations</h1>
        <div className="grid">
          {/* Destination Card 1 */}
          <div className="card">
            <Image  src="/paris.png" height={100} width={100} alt="Paris" />
            <h2>Paris</h2>
            <p>Discover the charm of the Eiffel Tower, art museums, and charming cafes.</p>
          </div>
          
          {/* Destination Card 2 */}
          <div className="card">
            <Image src="/tokyo.png"height={100} width={100}  alt="Tokyo" />
            <h2>Tokyo</h2>
            <p>Experience the perfect blend of tradition and technology in this vibrant city.</p>
          </div>

          {/* Destination Card 3 */}
          <div className="card">
            <Image  src="/maldives.png "height={100} width={100}  alt="Maldives" />
            <h2>Maldives</h2>
            <p>Relax on the beaches and experience the crystal clear waters of the Maldives.</p>
          </div>

          {/* Destination Card 4 */}
          <div className="card">
            <Image  src="/newyok.png" height={100} width={100} alt="New York" />
            <h2>New York</h2>
            <p>From Times Square to Central Park, New York offers endless excitement.</p>
          </div>
        </div>
      </main>

    </div>
  );
}
