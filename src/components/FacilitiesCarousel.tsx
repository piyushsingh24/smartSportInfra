import ThumbnailCarousel from './ui/thumbnail-carousel';

export default function FacilitiesCarousel() {
  return (
    <section className="py-12 bg-slate-900">
      <h1 className='text-4xl sm:text-5xl font-bold text-orange-600 mb-4 text-center '>Facilities</h1>
      <ThumbnailCarousel />
    </section>
  );
}
