// Single source of truth for the course structure.
// Used by the route middleware (sidebar + prev/next), the course pages and the home page.

export const PASS_PERCENT = 70;

export const tiers = [
  { id: 'high-school', title: 'มัธยมปลาย', subtitle: 'ม.4–ม.6 · ปูพื้นก่อนเข้าคณะวิศวะ' },
  { id: 'university', title: 'มหาวิทยาลัย', subtitle: 'หลักสูตรและวิชาพื้นฐานของแต่ละภาควิชา' },
  { id: 'industry', title: 'Industry Practice', subtitle: 'งานจริงในแต่ละอุตสาหกรรม' },
];

const ICONS = {
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  bridge: '<path d="M2 18h20M4 18v-6M20 18v-6M2 12c4 0 6-5 10-5s6 5 10 5M8 18v-4M12 18v-6M16 18v-4"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7.5 15h9"/>',
  factory: '<path d="M3 21V10l6 4V10l6 4V6h6v15z"/><path d="M7 18h2M12 18h2M17 18h2"/>',
  wind: '<path d="M12 11v10M9 21h6M12 11V3M12 11l7 4M12 11l-7 4"/><circle cx="12" cy="11" r="1.4" fill="currentColor"/>',
  solar: '<circle cx="12" cy="7" r="3"/><path d="M12 1.5v1.5M6.5 7H5M19 7h-1.5M8.1 3.1l1 1M15.9 3.1l-1 1"/><path d="M4 21l3-8h10l3 8z"/><path d="M5.5 17h13M12 13v8"/>',
  thermal: '<path d="M4 21V12h6v9M12 21l1-12h4l1 12"/><path d="M15 7c0-1.5 1.5-2 1.5-3.5M2.5 21h19"/>',
  drilling: '<path d="M6 21L12 3l6 18M8.3 14h7.4M9.8 9.5h4.4M8.3 14l5.9-4.5M15.7 14 9.8 9.5"/>',
};

const U = 'foundations/university/';
const I = 'industry/';

export const courses = [
  {
    id: 'high-school', tier: 'high-school', title: 'มัธยมปลาย: ปูพื้นสู่วิศวกรรม', short: 'มัธยมปลาย',
    color: '#2f9e6b', icon: ICONS.book,
    description: 'คณิตศาสตร์ ฟิสิกส์ เคมี ชีววิทยา ม.4–ม.6 พร้อมชี้ว่าแต่ละหัวข้อถูกนำไปใช้ที่ไหนในงานวิศวกรรมจริง',
    outcomes: ['รู้ว่าหัวข้อ ม.ปลาย หัวข้อใดสำคัญกับภาควิชาใด', 'เชื่อมสมการ ม.ปลาย เข้ากับโจทย์งานจริง', 'เตรียมพื้นฐานก่อนเรียนวิชาปี 1–2 ในมหาวิทยาลัย'],
    lessons: ['foundations/high-school', 'foundations/high-school/math', 'foundations/high-school/physics', 'foundations/high-school/chemistry', 'foundations/high-school/biology'],
  },
  {
    id: 'electrical', tier: 'university', title: 'วิศวกรรมไฟฟ้า', short: 'ไฟฟ้า', color: '#e3a21a', icon: ICONS.bolt,
    description: 'หลักสูตรวิศวกรรมไฟฟ้าและเส้นทางสู่งานกังหันลม โซลาร์ และระบบไฟฟ้ากำลัง',
    outcomes: ['เห็นภาพรวมรายวิชาตลอด 4 ปี', 'รู้ว่าวิชาใดใช้กับงานพลังงานส่วนใด', 'เข้าใจบทบาทวิศวกรไฟฟ้าในฟาร์มกังหันลมและโซลาร์'],
    lessons: [U + 'electrical'],
  },
  {
    id: 'civil', tier: 'university', title: 'วิศวกรรมโยธา', short: 'โยธา', color: '#8a7f72', icon: ICONS.bridge,
    description: 'หลักสูตรวิศวกรรมโยธาและบทบาทในงานก่อสร้างโครงการพลังงาน',
    outcomes: ['เห็นภาพรวมรายวิชาตลอด 4 ปี', 'รู้ว่าวิชาใดใช้กับฐานราก โครงสร้าง และงานดิน', 'เข้าใจงานโยธาในโครงการลม โซลาร์ และโรงไฟฟ้า'],
    lessons: [U + 'civil'],
  },
  {
    id: 'mechanical', tier: 'university', title: 'วิศวกรรมเครื่องกล', short: 'เครื่องกล', color: '#3aa6d0', icon: ICONS.gear,
    description: 'หลักสูตรวิศวกรรมเครื่องกล พร้อมบทเรียน Fluid Mechanics และ Thermodynamics',
    outcomes: ['เห็นภาพรวมรายวิชาตลอด 4 ปี', 'ใช้หลักกลศาสตร์ของไหลกับแรงดันและกำลังลม', 'ใช้กฎอุณหพลศาสตร์และวัฏจักร Rankine'],
    lessons: [U + 'mechanical', U + 'mechanical/fluid-mechanics', U + 'mechanical/thermodynamics'],
  },
  {
    id: 'petroleum', tier: 'university', title: 'วิศวกรรมปิโตรเลียม', short: 'ปิโตรเลียม', color: '#7d6bd6', icon: ICONS.drop,
    description: 'หลักสูตรวิศวกรรมปิโตรเลียมและเส้นทางสู่งานเจาะ',
    outcomes: ['เห็นภาพรวมรายวิชาตลอด 4 ปี', 'รู้ว่าวิชาใดใช้กับงานเจาะ', 'เตรียมพื้นฐานก่อนเรียนคอร์ส Drilling'],
    lessons: [U + 'petroleum'],
  },
  {
    id: 'chemical', tier: 'university', title: 'วิศวกรรมเคมี', short: 'เคมี', color: '#c2504a', icon: ICONS.flask,
    description: 'หลักสูตรวิศวกรรมเคมีและงานกระบวนการผลิต ปิโตรเคมี และโรงไฟฟ้า',
    outcomes: ['เห็นภาพรวมรายวิชาตลอด 4 ปี', 'เข้าใจหลักสมดุลมวลและพลังงาน', 'รู้บทบาทวิศวกรเคมีในงานพลังงาน'],
    lessons: [U + 'chemical'],
  },
  {
    id: 'industrial', tier: 'university', title: 'วิศวกรรมอุตสาหการ', short: 'อุตสาหการ', color: '#2f8f8f', icon: ICONS.factory,
    description: 'หลักสูตรวิศวกรรมอุตสาหการ ความน่าเชื่อถือ การบำรุงรักษา และเศรษฐศาสตร์วิศวกรรม',
    outcomes: ['เห็นภาพรวมรายวิชาตลอด 4 ปี', 'คำนวณความน่าเชื่อถือและ MTBF', 'ใช้ NPV ประเมินความคุ้มค่าของโครงการ'],
    lessons: [U + 'industrial'],
  },
  {
    id: 'wind', tier: 'industry', title: 'Wind Energy', short: 'Wind', color: '#3aa6d0', icon: ICONS.wind,
    description: 'ตั้งแต่เทคโนโลยีกังหัน การประเมินลม การวาง layout การพัฒนาโครงการ ก่อสร้าง O&M จนถึงฟาร์มนอกชายฝั่ง',
    outcomes: ['อธิบายส่วนประกอบและการควบคุมของกังหันลม', 'ประเมินทรัพยากรลมและพลังงานรายปี (P50/P90)', 'เข้าใจขั้นตอนพัฒนา ก่อสร้าง และบำรุงรักษาฟาร์ม'],
    lessons: ['wind-turbine-technology', 'wind-resource-assessment', 'wind-farm-layout-energy-yield', 'wind-farm-development', 'wind-farm-construction', 'wind-farm-om', 'offshore-wind'].map((s) => I + 'wind/' + s),
  },
  {
    id: 'solar', tier: 'industry', title: 'Solar Energy', short: 'Solar', color: '#e3a21a', icon: ICONS.solar,
    description: 'รังสีอาทิตย์และเซลล์แสงอาทิตย์ การออกแบบโรงไฟฟ้า PV การบำรุงรักษา และ Solar Thermal (CSP)',
    outcomes: ['อ่าน IV curve และเข้าใจผลของอุณหภูมิ', 'ออกแบบ string และคำนวณ Performance Ratio', 'วางแผน O&M และเปรียบเทียบ PV กับ CSP'],
    lessons: ['solar-fundamentals', 'pv-plant-design', 'solar-pv-om', 'concentrated-solar-power'].map((s) => I + 'solar/' + s),
  },
  {
    id: 'thermal', tier: 'industry', title: 'Thermal Power', short: 'Thermal', color: '#d0603a', icon: ICONS.thermal,
    description: 'โรงไฟฟ้าพลังความร้อน heat rate กังหันก๊าซ โรงไฟฟ้าความร้อนร่วม และการบำรุงรักษา',
    outcomes: ['แปลงประสิทธิภาพกับ heat rate', 'อธิบายกังหันก๊าซ HRSG และ combined cycle', 'เข้าใจการตรวจซ่อมและเคมีของน้ำในโรงไฟฟ้า'],
    lessons: ['thermal-power-overview', 'gas-turbine-combined-cycle', 'thermal-plant-om'].map((s) => I + 'thermal/' + s),
  },
  {
    id: 'drilling', tier: 'industry', title: 'Drilling', short: 'Drilling', color: '#7d6bd6', icon: ICONS.drilling,
    description: 'น้ำโคลนเจาะ การเจาะหลุมแบบควบคุมทิศทาง และการควบคุมหลุม',
    outcomes: ['คำนวณแรงดันไฮโดรสแตติก ECD และ rheology', 'ออกแบบช่วง build และคำนวณ survey', 'อธิบายการตรวจจับ kick และการฆ่าหลุม'],
    lessons: ['drilling-fluid', 'directional-drilling', 'well-control'].map((s) => I + 'drilling/' + s),
  },
];

export const courseById = (id) => courses.find((c) => c.id === id);
export const courseForLesson = (lessonId) => courses.find((c) => c.lessons.includes(lessonId));

/** Paths without the site base, always with a trailing slash. */
export const lessonPath = (lessonId) => `/${lessonId}/`;
export const coursePath = (course) => `/courses/${course.id}/`;
export const examPath = (course) => `/courses/${course.id}/exam/`;
export const catalogPath = '/courses/';
