const si = require('react-icons/si');
const names = ['SiPowerbi','SiMicrosoftExcel','SiJava','SiMongodb','SiExpress','SiNodedotjs','SiReact','SiPython','SiStreamlit','SiBootstrap','SiMysql','SiPhp','SiFigma','SiR'];
names.forEach(n => console.log(n + ': ' + (n in si)));
