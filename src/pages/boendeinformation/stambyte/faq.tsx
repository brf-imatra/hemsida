import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type FAQ = {
  question: string;
  answer: string;
  link?: string;
};

const faqs: Array<FAQ> = [
  {
    question: 'Vattenburen eller el-uppvärmt golvvärme?',
    answer:
      'Styrelsen beställde en analys för att kunna fatta ett informerat beslut gällande golvvärme i badrum. Utifrån rapporten har styrelsen beslut att el-uppvärmda badrumsgolv kommer att installeras. Eftersom det handlar om komfortvärme och inte uppvärmning av badrummet gör det svårt att motivera den högre installationskostnaden för vattenburengolvvärme. Det el-uppvärmda badrumsgolvet kommer att gå att stänga av för den som vill spara in på sin elräkningen.',
    link: '/boendeinformation/stambyte/rapport-golvvarme',
  },
  {
    question: 'När beräknas stambytet påbörjas?',
    answer:
      'Styrelsen kan inte ge något exakt datum för när stambytesarbetet kommer att påbörjas. Upphandlingsunderlag är skickat till fyra entreprenörer och styrelsen jobbar för att kunna påbörja stambyte under april 2023. Vi kommer att hålla er uppdaterade om hur det går med stambytet.',
  },
  {
    question: 'Elcentralen byts ut och det installeras en jordfelsbrytare. Varför får inte elektrikern lämna på utrustning som utlöser jordfelsbrytare?',
    answer: 'En jordfelsbrytare är en säkerhetsanordning som skyddar mot elektrisk stöt. Den fungerar genom att övervaka strömmen som flödar genom en krets och snabbt bryta strömmen om en jordfel upptäcks. Jordfel kan orsaka allvarliga personskador och det är därför viktigt att jordfelsbrytaren fungerar korrekt och inte stängs av av misstag. Elektrikern testar jordfelsbrytaren efter installationen för att säkerställa att den fungerar korrekt. Om jordfelsbrytaren utlöses finns det en brukare som orsakar felet. Vidare felsökning och åtgärd behöver genomföras av en elektriker som den boende får bekosta.',
    },
  // More questions...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function StambyteFaq() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vanliga frågor om stambyte
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform',
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <>
                        <p className="text-base text-gray-500">{faq.answer}</p>
                        {faq.link ? (
                          <Link href={faq.link!}>Läs mer...</Link>
                        ) : null}
                      </>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
