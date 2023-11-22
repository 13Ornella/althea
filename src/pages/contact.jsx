import Flydash from "./Flydash";


const people = [
  {
    name: 'Notre siège',
    email: 'Andoharanofotsy Antananarivo 102 PK 11 route d’Antsirabe',
       imageUrl:
      'https://t4.ftcdn.net/jpg/02/54/62/25/240_F_254622588_6OClHyYpak64rVI8y9QVjUvDlStsDEu9.jpg',
    },
  {
    name: 'Téléphone',
    email: '+261 20 22 467 12',
      imageUrl:
      'https://t3.ftcdn.net/jpg/01/27/26/74/240_F_127267494_GNBpSvO4TdrNNgXnfEcd25LYwGP4KT3Q.jpg',
  },
  {
    name: 'E-mail',
    email: 'contact@www.althea.mg',
       imageUrl:
      'https://t4.ftcdn.net/jpg/01/26/39/73/240_F_126397385_YSHBFkORjoxhn1GbUoSWC8mKhYey8orW.jpg',
    },
  {
    name: 'Linkedin',
    email: 'GROUPE ALTHEA',
      imageUrl:
      'https://t4.ftcdn.net/jpg/06/04/68/99/240_F_604689984_50VpKqlFBCOvSC54HM8Z92uneHoIJ1F9.jpg',
     },
  {
    name: 'Facebook',
    email: 'Groupe Althea',
       imageUrl:
      'https://t4.ftcdn.net/jpg/06/04/68/99/240_F_604689947_VfjjQlpxBeWziANIBT6XygnyRTj4BJzH.jpg',
    },
]

export default function COntact() {
  return (
    <div className="flex ">
      <Flydash/>
               <div className="w-1/2 h-screen " >
          <div className="flex items-center justify-center h-full bg-no-repeat bg-cover h-full bg-center bg-full bg-opacity-{20}
       bg-[url('https://t4.ftcdn.net/jpg/02/74/71/47/240_F_274714755_rv3njp6gfpRdJxTZj9b9ypAA5Z2gQNJ7.jpg')]
       ">
            <div className="px-4 py-6 mx-4 md:mx-8 text-white">
              <h4 className="mr-60 text-8xl text-blue-950 font-bold">Nous <br /> contacter</h4>
             
            </div>
          </div>
        </div>
          <div className="w-1/2 mx-10 mt-10">
          <img class="mx-auto h-14 w-auto block mb-6" src="https://www.althea.mg/wp-content/themes/hello-theme-child/images/logo-althea-380x110.png"/>
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-xl font-bold leading-6 text-blue-950">{person.name}</p>
              <p className="mt-1 truncate text-xl leading-5 text-gray-700">{person.email}</p>
            </div>
          </div>
                  </li>
      ))}
    </ul>
</div>
</div>
    );
}