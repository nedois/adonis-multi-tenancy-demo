import Country from '#models/central/country'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Country.createMany(countries)
  }
}

const countries = [
  {
    id: 'eb7a8127-9730-49ac-a12f-3ca498af872d',
    name: 'Afghanistan',
    iso: 'AF',
  },
  {
    id: '508c4a6a-d223-4b57-8263-c2eebce6d561',
    name: 'South Africa',
    iso: 'ZA',
  },
  {
    id: '8fce1390-6c67-45fd-b237-6f2fb6d7773b',
    name: 'Albania',
    iso: 'AL',
  },
  {
    id: 'eb8594b8-ede3-42f8-aa4f-5f37840d22e0',
    name: 'Germany',
    iso: 'DE',
  },
  {
    id: '317162d7-c89a-494f-b302-a17e40f30637',
    name: 'Andorra',
    iso: 'AD',
  },
  {
    id: '168ac5b8-06ec-4f35-9365-3f9d4f4b0045',
    name: 'Angola',
    iso: 'AO',
  },
  {
    id: 'c20b8d25-9d60-4573-b7e0-47466f0eb884',
    name: 'Anguilla',
    iso: 'AI',
  },
  {
    id: 'c1a5930c-ef35-4d95-8bbd-3eb4da443a03',
    name: 'Antarctica',
    iso: 'AQ',
  },
  {
    id: 'db2995cd-974f-4a64-891c-b7abf099aabb',
    name: 'Antigua & Barbuda',
    iso: 'AG',
  },
  {
    id: 'd08c2b45-0c48-49eb-be5a-fab2edc765be',
    name: 'Saudi Arabia',
    iso: 'SA',
  },
  {
    id: 'd1000b13-362b-4d30-aead-cbad7ae854b0',
    name: 'Algeria',
    iso: 'DZ',
  },
  {
    id: '0a66e426-9b31-4fca-9eab-52309a6f7750',
    name: 'Argentina',
    iso: 'AR',
  },
  {
    id: '071435c8-7cd4-45b4-96a0-3bf7ded0259c',
    name: 'Armenia',
    iso: 'AM',
  },
  {
    id: '9ce44c91-477d-4639-bedd-a14d9790e713',
    name: 'Aruba',
    iso: 'AW',
  },
  {
    id: '8a00c4b5-339a-40e8-b189-a743d5d9f088',
    name: 'Australia',
    iso: 'AU',
  },
  {
    id: 'bc06dfa0-3d89-4cac-87a3-d8978576fd62',
    name: 'Austria',
    iso: 'AT',
  },
  {
    id: '33f6d89e-8fda-4d05-a47d-84f51003361a',
    name: 'Azerbaijan',
    iso: 'AZ',
  },
  {
    id: 'b31df334-c52d-49c1-af5b-9a62bf240bcb',
    name: 'Bahamas',
    iso: 'BS',
  },
  {
    id: '44753b47-3906-442f-84e6-80637bb0c56d',
    name: 'Bahrain',
    iso: 'BH',
  },
  {
    id: '51b1c1c4-f6d6-4047-ac5e-716c73ff0e1f',
    name: 'Bangladesh',
    iso: 'BD',
  },
  {
    id: '94e272de-085f-4a66-a1a1-fe08f5dfe52d',
    name: 'Barbados',
    iso: 'BB',
  },
  {
    id: 'b7a4b74f-6210-459c-beb5-769ff794cea5',
    name: 'Belarus',
    iso: 'BY',
  },
  {
    id: 'ac5dd146-7413-4101-a53e-e832d3a13ab9',
    name: 'Belgium',
    iso: 'BE',
  },
  {
    id: '62552cce-519b-4a32-a361-8d5555ade5ad',
    name: 'Belize',
    iso: 'BZ',
  },
  {
    id: 'a6ab15ac-1de6-4ba4-92f1-75f57035e85f',
    name: 'Benin',
    iso: 'BJ',
  },
  {
    id: '632a9215-31a5-46f0-ac76-24c5fad151b8',
    name: 'Bermuda',
    iso: 'BM',
  },
  {
    id: '3def31df-9e41-4e00-8ce0-989879c9e3ec',
    name: 'Bolivia',
    iso: 'BO',
  },
  {
    id: 'ea965207-7640-4d8d-98d2-03f3e5b97c11',
    name: 'Bosnia & Herzegovina',
    iso: 'BA',
  },
  {
    id: '997bb993-31fe-4289-8244-25002d869878',
    name: 'Botswana',
    iso: 'BW',
  },
  {
    id: 'c9283ec5-6317-4f7b-8ba5-c3cd241beabd',
    name: 'Brazil',
    iso: 'BR',
  },
  {
    id: '97c273f6-b858-42a3-b951-6e2b1cf4b3e7',
    name: 'Brunei',
    iso: 'BN',
  },
  {
    id: '9c4efa8d-1ea3-4abc-a370-97fa1412e155',
    name: 'Bulgaria',
    iso: 'BG',
  },
  {
    id: 'aa2990a8-408b-478e-a5c9-eef97267bd81',
    name: 'Burkina Faso',
    iso: 'BF',
  },
  {
    id: '2816a6c5-976d-4912-81bf-01ef943587dd',
    name: 'Burundi',
    iso: 'BI',
  },
  {
    id: '3bfd1907-a1f2-4a20-9dc9-8ee73273f42f',
    name: 'Bhutan',
    iso: 'BT',
  },
  {
    id: '2639cdfe-489b-4943-8171-37e17c30e812',
    name: 'Cape Verde',
    iso: 'CV',
  },
  {
    id: '4dee9392-f2ae-4a48-badd-0c344582b1cd',
    name: 'Cameroon',
    iso: 'CM',
  },
  {
    id: 'bfd7b39f-7605-47cf-a478-8c2899f38143',
    name: 'Cambodia',
    iso: 'KH',
  },
  {
    id: 'e24f66a4-29a4-47dd-be01-9a16631bd539',
    name: 'Canada',
    iso: 'CA',
  },
  {
    id: 'dce58d0f-4de9-4e22-b202-aa277a8573b6',
    name: 'Canary Islands',
    iso: 'IC',
  },
  {
    id: '172e89fa-ba03-48c3-ab9c-6684ca47de69',
    name: 'Kazakhstan',
    iso: 'KZ',
  },
  {
    id: '0edeec21-2a84-4c69-9462-62d06a3603e9',
    name: 'Ceuta & Melilla',
    iso: 'EA',
  },
  {
    id: '0c9798d0-09bc-4a3d-9120-46a300e65f85',
    name: 'Chad',
    iso: 'TD',
  },
  {
    id: 'adc1685d-c443-40ae-8425-f80ca581016b',
    name: 'Chile',
    iso: 'CL',
  },
  {
    id: '2a872d96-f497-4e47-a4d8-360ed541422a',
    name: 'China',
    iso: 'CN',
  },
  {
    id: '740cb2ab-8826-4c84-acbe-b3e7d056497b',
    name: 'Cyprus',
    iso: 'CY',
  },
  {
    id: 'e976fb7f-13f8-493a-ba6c-b57d48d73d1a',
    name: 'Singapore',
    iso: 'SG',
  },
  {
    id: '2a1322e2-ee15-4ed9-8d19-59b5b69d5c77',
    name: 'Colombia',
    iso: 'CO',
  },
  {
    id: '98de55c8-670c-45b4-8226-c0c67910af1d',
    name: 'Comoros',
    iso: 'KM',
  },
  {
    id: '5718840c-cec9-4a2e-874d-1a4804cd44d1',
    name: 'Congo (Republic)',
    iso: 'CG',
  },
  {
    id: 'c667d2d5-8b3d-417d-b24f-154bf0c9ea42',
    name: 'North Korea',
    iso: 'KP',
  },
  {
    id: 'c886b3f9-f158-4488-a4ce-855596dc48ce',
    name: 'South Korea',
    iso: 'KR',
  },
  {
    id: '61fac690-2481-4744-bffa-1b90126cd941',
    name: 'Côte d¿Ivoire',
    iso: 'CI',
  },
  {
    id: 'cd695d53-809a-4f45-9a53-0e28d008b890',
    name: 'Costa Rica',
    iso: 'CR',
  },
  {
    id: '5ac788d9-9417-44fd-81fd-e20020e1a89c',
    name: 'Croatia',
    iso: 'HR',
  },
  {
    id: 'b689d556-50f2-4a8e-974e-ad4ede9e1926',
    name: 'Cuba',
    iso: 'CU',
  },
  {
    id: '74fc929a-8c8a-4499-b847-9599097cabe5',
    name: 'Curaçao',
    iso: 'CW',
  },
  {
    id: '85c7a6fe-47b5-4516-a862-3ab79332d068',
    name: 'Diego Garcia',
    iso: 'DG',
  },
  {
    id: 'cf42d628-a94f-4d4b-a323-425013b20ad4',
    name: 'Denmark',
    iso: 'DK',
  },
  {
    id: '8a288e8e-830d-46b0-863c-db21eade5076',
    name: 'Djibouti',
    iso: 'DJ',
  },
  {
    id: '2387d6cc-528f-4ad8-9d46-32d208581fd3',
    name: 'Dominica',
    iso: 'DM',
  },
  {
    id: '064f63f6-50ae-46b6-8f36-9753fa5d329c',
    name: 'Egypt',
    iso: 'EG',
  },
  {
    id: '1b44a48b-27e4-4111-9f1f-bb6e89dcc91d',
    name: 'El Salvador',
    iso: 'SV',
  },
  {
    id: '79211088-fd8d-4016-9ee3-50799ad6095b',
    name: 'United Arab Emirates',
    iso: 'AE',
  },
  {
    id: '6b1a3b79-9bc1-4a78-b445-fddd8c01460e',
    name: 'Ecuador',
    iso: 'EC',
  },
  {
    id: 'afc2a7e3-02db-4c29-953e-fb78d361336c',
    name: 'Eritrea',
    iso: 'ER',
  },
  {
    id: 'c5ccbce9-8c51-4d3d-9fc5-25dc333a6c11',
    name: 'Slovakia',
    iso: 'SK',
  },
  {
    id: '581d346e-b198-44e4-97e7-2d8a9b3c5ebd',
    name: 'Slovenia',
    iso: 'SI',
  },
  {
    id: 'ff88becf-ef20-40d7-91db-0ad4afe10ff2',
    name: 'Spain',
    iso: 'ES',
  },
  {
    id: 'd1c0d9a1-e50c-4abf-9245-db43a1e3195f',
    name: 'United States',
    iso: 'US',
  },
  {
    id: 'dbc30514-2634-4544-8784-beb96dc06084',
    name: 'Estonia',
    iso: 'EE',
  },
  {
    id: '4c32a263-a5fa-4522-80b9-0ecdd4a6fe10',
    name: 'Ethiopia',
    iso: 'ET',
  },
  {
    id: '88b115ad-2def-4394-8dee-bf806a4ea87b',
    name: 'Fiji',
    iso: 'FJ',
  },
  {
    id: '1dd9e341-d88c-4771-bf38-51cdb1713d34',
    name: 'Philippines',
    iso: 'PH',
  },
  {
    id: 'c763352b-e461-48d6-b46c-3e3ae7b8952f',
    name: 'Finland',
    iso: 'FI',
  },
  {
    id: '732910d5-93c0-4e50-94f8-0c10de11446b',
    name: 'France',
    iso: 'FR',
  },
  {
    id: 'c3ab68f3-a3cc-4ed1-9825-f5f39c1146fb',
    name: 'Gabon',
    iso: 'GA',
  },
  {
    id: '5bacd22b-2bb2-4280-a321-342888c23c36',
    name: 'Gambia',
    iso: 'GM',
  },
  {
    id: '36feca4f-5730-4624-b6a9-27bef908faba',
    name: 'Ghana',
    iso: 'GH',
  },
  {
    id: '15e7a9a4-b836-43a7-a71b-36fe5a45433d',
    name: 'Georgia',
    iso: 'GE',
  },
  {
    id: '93bd4f51-a012-4e35-bf30-9bc436b93312',
    name: 'Gibraltar',
    iso: 'GI',
  },
  {
    id: '91247938-5efb-48d5-92c7-0fb9dcf1900f',
    name: 'United Kingdom',
    iso: 'GB',
  },
  {
    id: '78bf33ae-6a39-49d0-a67f-508785fc3379',
    name: 'Grenada',
    iso: 'GD',
  },
  {
    id: '3db1be13-779e-4efd-bd51-17b62f7e7f77',
    name: 'Greece',
    iso: 'GR',
  },
  {
    id: '05f38285-a11b-426a-a3c2-5754d74f48ed',
    name: 'Greenland',
    iso: 'GL',
  },
  {
    id: '9115e864-e536-456f-b7b4-b90cea42052d',
    name: 'Guadeloupe',
    iso: 'GP',
  },
  {
    id: '2ea14316-f098-4326-a5d1-5ea2a73d6de6',
    name: 'Guam',
    iso: 'GU',
  },
  {
    id: '67fe7407-54a8-4a3e-b7f9-21e58c489e6b',
    name: 'Guatemala',
    iso: 'GT',
  },
  {
    id: '46e8e4d1-c8ce-4332-947d-be9cb1912f0b',
    name: 'Guernsey',
    iso: 'GG',
  },
  {
    id: '0b4fa0dd-6c00-4aa0-95bd-7cbfb5e5b1a8',
    name: 'Guyana',
    iso: 'GY',
  },
  {
    id: 'a59c48fa-44a4-4e91-866c-5a8ef7f9662a',
    name: 'French Guiana',
    iso: 'GF',
  },
  {
    id: 'bd920f5a-4c84-4cc8-8981-0dcf834fd303',
    name: 'Guinea',
    iso: 'GN',
  },
  {
    id: 'e3049c79-2f5d-4fbb-8a9d-d257579b76db',
    name: 'Equatorial Guinea',
    iso: 'GQ',
  },
  {
    id: '3e76f7d2-3493-4fa9-ae6f-0771cea04e80',
    name: 'Guinea-Bissau',
    iso: 'GW',
  },
  {
    id: '0aa6c86b-7a62-4f41-994c-22946374a1e9',
    name: 'Haiti',
    iso: 'HT',
  },
  {
    id: '700ba883-be50-4032-956f-9c1d924051c8',
    name: 'Netherlands',
    iso: 'NL',
  },
  {
    id: 'c6cd26a5-6e75-44c1-bf8c-6f8120fb63eb',
    name: 'Honduras',
    iso: 'HN',
  },
  {
    id: '789e0d44-5740-4dd8-a9bb-603e1a9e0228',
    name: 'Hong Kong',
    iso: 'HK',
  },
  {
    id: '1dfc06e2-d71d-42aa-8608-2c6b5879217e',
    name: 'Hungary',
    iso: 'HU',
  },
  {
    id: '47489171-7cef-4f49-bbeb-f1d0f7b75b65',
    name: 'Yemen',
    iso: 'YE',
  },
  {
    id: 'b1b4bec5-9fda-4bc5-9ce8-c7a42ce71d67',
    name: 'Bouvet Island',
    iso: 'BV',
  },
  {
    id: '5b45c79f-a07b-4353-9481-312da344ebca',
    name: 'Ascension Island',
    iso: 'AC',
  },
  {
    id: '8d5445ff-72b1-4196-b150-9295db27e69c',
    name: 'Clipperton Island',
    iso: 'CP',
  },
  {
    id: '3fbbb602-4c3f-4439-bb90-88027fa08cf4',
    name: 'Isle of Man',
    iso: 'IM',
  },
  {
    id: 'd8ce73c3-69fc-4083-8f89-d3debc6750f4',
    name: 'Christmas Island',
    iso: 'CX',
  },
  {
    id: '2c807a26-35c9-487b-9151-d2fc3cf975e2',
    name: 'Pitcairn Islands',
    iso: 'PN',
  },
  {
    id: '5ef0c484-4f0d-4b03-bc12-9e2fd0c75a19',
    name: 'Réunion',
    iso: 'RE',
  },
  {
    id: '1292915a-018f-4e0b-a2fa-094bed16813e',
    name: 'Åland Islands',
    iso: 'AX',
  },
  {
    id: '69004200-c103-481f-8758-ae3efca6d8ea',
    name: 'Cayman Islands',
    iso: 'KY',
  },
  {
    id: 'b18c6fe4-d294-459f-bbb8-6b3bee455970',
    name: 'Cocos (Keeling) Islands',
    iso: 'CC',
  },
  {
    id: 'a9505083-e749-4732-acbd-e5d4a9b04ca2',
    name: 'Cook Islands',
    iso: 'CK',
  },
  {
    id: '4a6c08b3-5cab-4aee-830f-a3a401c524c2',
    name: 'Faroe Islands',
    iso: 'FO',
  },
  {
    id: 'f73e6284-adc5-4245-a49c-dead79543275',
    name: 'South Georgia & South Sandwich Islands',
    iso: 'GS',
  },
  {
    id: 'b1fd4438-9257-4f4c-ba32-16775139ab7c',
    name: 'Heard & McDonald Islands',
    iso: 'HM',
  },
  {
    id: '197fa84e-6506-426c-8eab-8bb04fa31fcd',
    name: 'Falkland Islands (Islas Malvinas)',
    iso: 'FK',
  },
  {
    id: '0fd41b2a-c71c-4267-be60-de14d5751695',
    name: 'Northern Mariana Islands',
    iso: 'MP',
  },
  {
    id: '83f3d759-5898-447a-905a-8aa50727fc9c',
    name: 'Marshall Islands',
    iso: 'MH',
  },
  {
    id: 'e45550f8-abd7-408f-8f84-0aa5215a4ef5',
    name: 'U.S. Outlying Islands',
    iso: 'UM',
  },
  {
    id: '892ef48d-65e7-4561-be95-30a3e54931ff',
    name: 'Norfolk Island',
    iso: 'NF',
  },
  {
    id: '22392646-a079-427d-bcac-9eed5b636f0f',
    name: 'Solomon Islands',
    iso: 'SB',
  },
  {
    id: 'bbfb981e-a6a0-4d66-9328-5628f3ef31e6',
    name: 'Seychelles',
    iso: 'SC',
  },
  {
    id: '5912be71-008e-45f3-b93e-ae8c9aae7b06',
    name: 'Tokelau',
    iso: 'TK',
  },
  {
    id: 'a17e9760-7e11-4f47-bc3d-3323e2f7af44',
    name: 'Turks & Caicos Islands',
    iso: 'TC',
  },
  {
    id: '257ba9eb-4d29-4641-be70-5f30eea390c1',
    name: 'U.S. Virgin Islands',
    iso: 'VI',
  },
  {
    id: 'd6b31593-69f0-4439-bec1-6398de1ebf96',
    name: 'British Virgin Islands',
    iso: 'VG',
  },
  {
    id: '574d9f72-05a5-4c4b-ab07-4bedb0359068',
    name: 'India',
    iso: 'IN',
  },
  {
    id: '979eeeb3-4113-452c-9f92-d6e47ae56789',
    name: 'Indonesia',
    iso: 'ID',
  },
  {
    id: 'be1bf875-6487-49c7-822e-06f804771c64',
    name: 'Iran',
    iso: 'IR',
  },
  {
    id: 'b5c3966d-3393-450c-a942-f0f379f167dd',
    name: 'Iraq',
    iso: 'IQ',
  },
  {
    id: '03b9e092-d3a9-4ce5-b817-8e7646819c4b',
    name: 'Ireland',
    iso: 'IE',
  },
  {
    id: 'b1c42515-b062-4ed3-8831-ab684d2bbceb',
    name: 'Iceland',
    iso: 'IS',
  },
  {
    id: '88bcec52-6606-42c9-9446-7a4a5e60b680',
    name: 'Israel',
    iso: 'IL',
  },
  {
    id: '376ff8ae-8ca6-4604-80d4-47e4c57a0b73',
    name: 'Italy',
    iso: 'IT',
  },
  {
    id: 'bd497efd-8ef8-43ff-b61a-22cbdf7df8ba',
    name: 'Jamaica',
    iso: 'JM',
  },
  {
    id: '39958bbe-50e9-4418-bc68-5406ee9f6f79',
    name: 'Japan',
    iso: 'JP',
  },
  {
    id: '7e2c610f-d45b-4329-9011-2939038cf0b2',
    name: 'Jersey',
    iso: 'JE',
  },
  {
    id: '93677824-612f-48ab-9d6f-3d96693c8cd1',
    name: 'Jordan',
    iso: 'JO',
  },
  {
    id: '06c5338f-c97e-4671-b12d-b575b0335dca',
    name: 'Kiribati',
    iso: 'KI',
  },
  {
    id: '04b061eb-4cbb-472e-92cb-e3a2f0047886',
    name: 'Kosovo',
    iso: 'XK',
  },
  {
    id: '498a5247-ab8e-4b84-ad1f-3ce24acda349',
    name: 'Kuwait',
    iso: 'KW',
  },
  {
    id: '7b692b0b-e325-4c79-8adf-eb4bce4137fc',
    name: 'Laos',
    iso: 'LA',
  },
  {
    id: 'e6c9839f-973e-429b-9520-050a8d16a33c',
    name: 'Lesotho',
    iso: 'LS',
  },
  {
    id: '541a729a-8c6f-419a-9809-5d2b379515fe',
    name: 'Latvia',
    iso: 'LV',
  },
  {
    id: 'bc361c94-6774-40cf-8d00-ee95d752b11a',
    name: 'Lebanon',
    iso: 'LB',
  },
  {
    id: '9c17a712-0522-434d-a488-46fcd625e037',
    name: 'Liberia',
    iso: 'LR',
  },
  {
    id: '504638eb-520f-47b6-be28-b3b546f272bc',
    name: 'Libya',
    iso: 'LY',
  },
  {
    id: '924bd359-495b-4011-8739-831d00f4f909',
    name: 'Liechtenstein',
    iso: 'LI',
  },
  {
    id: '34698754-6754-472b-b1d2-6faae1b5b7b2',
    name: 'Lithuania',
    iso: 'LT',
  },
  {
    id: 'dc988d99-32ed-4878-8e0c-217c9e07980b',
    name: 'Luxembourg',
    iso: 'LU',
  },
  {
    id: '32cbe128-4a6c-4750-9ef1-f994d8dd6772',
    name: 'Macau',
    iso: 'MO',
  },
  {
    id: 'ed157ec9-9f53-4741-899b-c5fcdf39870b',
    name: 'Macedonia (FYROM)',
    iso: 'MK',
  },
  {
    id: '81602834-9c79-4ac4-ae21-9693349e54ad',
    name: 'Madagascar',
    iso: 'MG',
  },
  {
    id: '330683d2-941f-439c-810a-a9c7995691bf',
    name: 'Malaysia',
    iso: 'MY',
  },
  {
    id: '118d4a62-f1fd-4f71-b326-b039e77128ae',
    name: 'Malawi',
    iso: 'MW',
  },
  {
    id: 'cdd6ca1e-b39c-4d1a-ab11-700df375dc5e',
    name: 'Maldives',
    iso: 'MV',
  },
  {
    id: '3b83dd12-7ab5-4bcb-adce-fa1eae27120d',
    name: 'Mali',
    iso: 'ML',
  },
  {
    id: 'f9ef7516-8968-4300-a08b-9f482ceddf52',
    name: 'Malta',
    iso: 'MT',
  },
  {
    id: '3140c8da-2957-4094-905c-c17dab4947c4',
    name: 'Morocco',
    iso: 'MA',
  },
  {
    id: '6ab197bb-c523-413a-98bb-10caa68dbda3',
    name: 'Martinique',
    iso: 'MQ',
  },
  {
    id: '96138a0b-25cd-4085-aa55-d2daaf599190',
    name: 'Mauritius',
    iso: 'MU',
  },
  {
    id: '7502aa27-dcc5-42d2-b8c1-bee304e4d25a',
    name: 'Mauritania',
    iso: 'MR',
  },
  {
    id: '5c2a67cf-61cb-4cfa-bf1e-7e1f5fd129a6',
    name: 'Mayotte',
    iso: 'YT',
  },
  {
    id: '41676140-e307-458b-8d98-ff399aea41a9',
    name: 'Mexico',
    iso: 'MX',
  },
  {
    id: 'e3e4503e-570b-454d-b6eb-311e07b0cf87',
    name: 'Micronesia',
    iso: 'FM',
  },
  {
    id: 'e24726c4-aa3f-4db3-a20a-35dcfa441ea2',
    name: 'Mozambique',
    iso: 'MZ',
  },
  {
    id: 'c1b4a9b1-fc1b-41ae-bd21-c7961d1fdf4b',
    name: 'Moldova',
    iso: 'MD',
  },
  {
    id: '05ee5569-ca3d-4197-ba65-7210c420d738',
    name: 'Monaco',
    iso: 'MC',
  },
  {
    id: 'bc495f65-96e9-4bcf-aa05-3b3c96d1f024',
    name: 'Mongolia',
    iso: 'MN',
  },
  {
    id: 'dd291b35-1de2-4d4b-bf60-816f3b77ebc2',
    name: 'Montenegro',
    iso: 'ME',
  },
  {
    id: 'e9c4060c-1e57-4d0c-aaf8-21d15a396b71',
    name: 'Montserrat',
    iso: 'MS',
  },
  {
    id: 'c3dd052c-1995-4a61-89ec-1267d0e464ef',
    name: 'Myanmar (Burma)',
    iso: 'MM',
  },
  {
    id: 'b5ed1094-9aae-4e4b-8634-a1bd2899b202',
    name: 'Namibia',
    iso: 'NA',
  },
  {
    id: '208338d2-b11f-4deb-9609-ffaf7e0f6a66',
    name: 'Nauru',
    iso: 'NR',
  },
  {
    id: '0e9ce2b8-967e-4015-9ac9-9aa35cb370cb',
    name: 'Nepal',
    iso: 'NP',
  },
  {
    id: '817762bf-5c77-419b-84fb-20e29e324b68',
    name: 'Nicaragua',
    iso: 'NI',
  },
  {
    id: 'b3fae6f3-f825-443e-ae4f-6ef96bc67e71',
    name: 'Niger',
    iso: 'NE',
  },
  {
    id: '14b87682-0d96-4c78-a17d-77db110713ee',
    name: 'Nigeria',
    iso: 'NG',
  },
  {
    id: '380b6994-89b4-489c-92dc-37241448a39a',
    name: 'Niue',
    iso: 'NU',
  },
  {
    id: 'cc03db37-3622-49db-8aaa-5971f8beaa98',
    name: 'Norway',
    iso: 'NO',
  },
  {
    id: 'd38dd0f3-be4c-42f7-83bf-2ac31d4917ff',
    name: 'New Caledonia',
    iso: 'NC',
  },
  {
    id: '73ae321b-cb5a-4e3b-9821-8aafaf5226c2',
    name: 'New Zealand',
    iso: 'NZ',
  },
  {
    id: '357bdcd3-06f8-4245-ac58-a8e821a622bb',
    name: 'Oman',
    iso: 'OM',
  },
  {
    id: 'a808b981-16f1-4cb6-b63b-dad16f6738ec',
    name: 'Caribbean Netherlands',
    iso: 'BQ',
  },
  {
    id: '86fa28bc-5376-4d89-be96-c7c05222084d',
    name: 'Palau',
    iso: 'PW',
  },
  {
    id: '7a1150d8-e1bd-4852-8e0b-b8ece5247d23',
    name: 'Palestine',
    iso: 'PS',
  },
  {
    id: 'cda89b84-6358-45f1-9708-da57081a102c',
    name: 'Panama',
    iso: 'PA',
  },
  {
    id: 'acee1128-9d64-4f96-9b94-65c00cd36dc1',
    name: 'Papua New Guinea',
    iso: 'PG',
  },
  {
    id: '2eaeb134-f5a3-422f-8754-bc83759f7773',
    name: 'Pakistan',
    iso: 'PK',
  },
  {
    id: 'fbde8376-41a3-4cfa-8e11-6af62ab6e313',
    name: 'Paraguay',
    iso: 'PY',
  },
  {
    id: '1241676f-85b7-446b-a7bd-dca38f8418c8',
    name: 'Peru',
    iso: 'PE',
  },
  {
    id: '1d2b8bf4-6f01-446c-bfee-af4f430a0d4e',
    name: 'French Polynesia',
    iso: 'PF',
  },
  {
    id: 'b75614f5-654f-4202-810e-988ee9cdf078',
    name: 'Poland',
    iso: 'PL',
  },
  {
    id: 'bff523a5-923b-4be2-a0a4-bdb039b75100',
    name: 'Puerto Rico',
    iso: 'PR',
  },
  {
    id: '8d8ec410-0994-4f78-b60d-2e6d778731ee',
    name: 'Portugal',
    iso: 'PT',
  },
  {
    id: 'cc13d85f-d9d5-424c-aee9-2e37117ce734',
    name: 'Qatar',
    iso: 'QA',
  },
  {
    id: 'c51c1bab-c141-4998-908a-5076cc0fa787',
    name: 'Kenya',
    iso: 'KE',
  },
  {
    id: '536a2b4a-426b-4d00-8d90-12de41b4210f',
    name: 'Kyrgyzstan',
    iso: 'KG',
  },
  {
    id: '2c839b70-9a95-46af-b12e-1e4eef0122f1',
    name: 'Central African Republic',
    iso: 'CF',
  },
  {
    id: '7e8ab1dd-b053-43f9-825d-1368ef887e62',
    name: 'Congo (DRC)',
    iso: 'CD',
  },
  {
    id: '9922444b-4344-4a3f-aa3a-ca1c3a4bcbbf',
    name: 'Dominican Republic',
    iso: 'DO',
  },
  {
    id: '27ab41f5-289a-4117-8eb9-0d67f15c033c',
    name: 'Czech Republic',
    iso: 'CZ',
  },
  {
    id: 'c32b55a3-8e97-466e-8448-3a97ea92012d',
    name: 'Romania',
    iso: 'RO',
  },
  {
    id: '4aeb59c2-d024-474b-a664-a063b8aaa7db',
    name: 'Rwanda',
    iso: 'RW',
  },
  {
    id: 'c4bde060-f706-4e68-9833-ace101ec29ba',
    name: 'Russia',
    iso: 'RU',
  },
  {
    id: '7f33472c-ce8c-45ec-8edd-933e4e821e2e',
    name: 'Western Sahara',
    iso: 'EH',
  },
  {
    id: 'cb15038e-a926-425c-be1b-642ecdcbb498',
    name: 'St. Pierre & Miquelon',
    iso: 'PM',
  },
  {
    id: '4d41374d-f1b5-462b-a1d3-f40dfdf1ed2c',
    name: 'American Samoa',
    iso: 'AS',
  },
  {
    id: '1a621b26-e244-454b-95cc-808992139d01',
    name: 'Samoa',
    iso: 'WS',
  },
  {
    id: 'cde61b85-e125-47e6-b6e9-d7d3f06c55d7',
    name: 'San Marino',
    iso: 'SM',
  },
  {
    id: '44a4bd74-9617-4f5d-bf3b-7f8c35ec80e5',
    name: 'St. Helena',
    iso: 'SH',
  },
  {
    id: '9c4d2236-f6cc-4066-a069-57df50646ab3',
    name: 'St. Lucia',
    iso: 'LC',
  },
  {
    id: 'e21496c0-a364-4a7f-b3ab-c605be83ac89',
    name: 'St. Barthélemy',
    iso: 'BL',
  },
  {
    id: '4c640681-c7f9-4e23-be7c-02b97ac0ce3e',
    name: 'St. Kitts & Nevis',
    iso: 'KN',
  },
  {
    id: '3488566e-fc5d-481f-93f3-d8cc932dcc9f',
    name: 'St. Martin',
    iso: 'MF',
  },
  {
    id: 'dca7e101-a6a9-4b8a-bf40-11efd7b9e455',
    name: 'Sint Maarten',
    iso: 'SX',
  },
  {
    id: 'd902222a-591f-4f78-9eb7-dd40a5d23ebc',
    name: 'São Tomé & Príncipe',
    iso: 'ST',
  },
  {
    id: '96f1513b-5a54-4a41-83ca-685fe35d27f8',
    name: 'St. Vincent & Grenadines',
    iso: 'VC',
  },
  {
    id: '6801b800-15d5-4188-bc57-6cad8ae63e18',
    name: 'Senegal',
    iso: 'SN',
  },
  {
    id: '47657d45-0873-4ad0-b74e-1ab39145f48c',
    name: 'Sierra Leone',
    iso: 'SL',
  },
  {
    id: '4ea26746-db2b-4b2f-af04-f9000af3cf47',
    name: 'Serbia',
    iso: 'RS',
  },
  {
    id: '75dc51ac-5294-4d0a-a39a-a479e33fc6e3',
    name: 'Syria',
    iso: 'SY',
  },
  {
    id: 'd86b91ea-cb8f-416d-9a08-ba3c4504a031',
    name: 'Somalia',
    iso: 'SO',
  },
  {
    id: 'ca5e9f44-826f-4019-84ec-d2ad4cc8de01',
    name: 'Sri Lanka',
    iso: 'LK',
  },
  {
    id: '4ce7b1fc-ce29-4cdd-86ce-be80b3d03f9b',
    name: 'Swaziland',
    iso: 'SZ',
  },
  {
    id: '983f34f4-6946-44e5-b7df-5e9b7bd407b0',
    name: 'Sudan',
    iso: 'SD',
  },
  {
    id: '4469c079-76d4-4e00-8663-067b74dbf549',
    name: 'South Sudan',
    iso: 'SS',
  },
  {
    id: 'ae3a0e5a-7940-4df0-b5cf-66c63e90a981',
    name: 'Sweden',
    iso: 'SE',
  },
  {
    id: 'f66a9fd1-81b1-4903-95f0-7e33190a0668',
    name: 'Switzerland',
    iso: 'CH',
  },
  {
    id: '86c63e50-ffbe-444e-8c15-38244666265f',
    name: 'Suriname',
    iso: 'SR',
  },
  {
    id: 'ef51ea19-337f-466d-9db1-2694011f248c',
    name: 'Svalbard & Jan Mayen',
    iso: 'SJ',
  },
  {
    id: 'd3ef3be4-928c-4228-94b5-6d0891d70859',
    name: 'Tajikistan',
    iso: 'TJ',
  },
  {
    id: '772a3fcd-31c1-4744-93c2-801d452cbbf2',
    name: 'Thailand',
    iso: 'TH',
  },
  {
    id: 'b7ddee0d-355b-4a7b-9a9f-df211ce94c19',
    name: 'Taiwan',
    iso: 'TW',
  },
  {
    id: 'ba980c04-231c-48e5-b12a-9c8f2725c930',
    name: 'Tanzania',
    iso: 'TZ',
  },
  {
    id: '96fb926a-e266-4618-8c05-f38b73564d65',
    name: 'British Indian Ocean Territory',
    iso: 'IO',
  },
  {
    id: 'd3ec8c44-13e7-4547-93ad-f735868870ba',
    name: 'French Southern Territories',
    iso: 'TF',
  },
  {
    id: '3a0fbca8-4857-4085-8b89-7f06d9864564',
    name: 'Timor-Leste',
    iso: 'TL',
  },
  {
    id: '2915ef06-7b12-42c9-9fda-9fbfc1a9d841',
    name: 'Togo',
    iso: 'TG',
  },
  {
    id: 'a8b01b82-f887-4e8b-a5fb-c833d86e4987',
    name: 'Tonga',
    iso: 'TO',
  },
  {
    id: '5a3995b2-4a6f-4abb-84fb-b4acce0f5107',
    name: 'Trinidad & Tobago',
    iso: 'TT',
  },
  {
    id: '962fc03d-cbf7-4bcf-a1f1-7a541066ef3a',
    name: 'Tristan da Cunha',
    iso: 'TA',
  },
  {
    id: 'a9f5bbe2-e6e0-41d1-be39-bc00da3db4f1',
    name: 'Tunisia',
    iso: 'TN',
  },
  {
    id: '619347b8-554e-48d4-a952-a8d44a3eea6e',
    name: 'Turkmenistan',
    iso: 'TM',
  },
  {
    id: 'ed6ec813-0841-4346-9bda-f3429681ecea',
    name: 'Turkey',
    iso: 'TR',
  },
  {
    id: '68d15485-7204-42e9-9a72-33964ddb299e',
    name: 'Tuvalu',
    iso: 'TV',
  },
  {
    id: '62b84704-a2f9-4efb-b2d0-c9724bb208d6',
    name: 'Ukraine',
    iso: 'UA',
  },
  {
    id: 'e411aabc-7cbe-4399-a735-c683017877ba',
    name: 'Uganda',
    iso: 'UG',
  },
  {
    id: '3867c7bc-a295-4065-8d11-418670af253b',
    name: 'Uruguay',
    iso: 'UY',
  },
  {
    id: '11f9ed60-a47e-4402-980d-22f54bc494fa',
    name: 'Uzbekistan',
    iso: 'UZ',
  },
  {
    id: '8aede515-ad29-442d-a9d2-fb318a6bc041',
    name: 'Vanuatu',
    iso: 'VU',
  },
  {
    id: '6baf4df2-74e6-4871-8074-c8a556cb9f73',
    name: 'Vatican City',
    iso: 'VA',
  },
  {
    id: '38034bf2-880a-4bfb-b23b-539213af8c30',
    name: 'Venezuela',
    iso: 'VE',
  },
  {
    id: 'f912a714-4200-4530-b98a-fa9991b044c4',
    name: 'Vietnam',
    iso: 'VN',
  },
  {
    id: '1451cde6-fbca-4c08-b795-60a87b077974',
    name: 'Wallis & Futuna',
    iso: 'WF',
  },
  {
    id: '7228b40f-69c9-4177-8913-190dc0d2ac6e',
    name: 'Zambia',
    iso: 'ZM',
  },
  {
    id: 'a0545fd0-5475-4cbe-a626-db3918712d27',
    name: 'Zimbabwe',
    iso: 'ZW',
  },
]
