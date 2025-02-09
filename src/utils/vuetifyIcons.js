import { h } from 'vue'

// 1) SVG 아이콘 자동 로딩
const modules = import.meta.glob('@/components/svg/*.vue', { eager: true })

// 2) 아이콘 객체 생성
const customIcons = {}

Object.entries(modules).forEach(([path, module]) => {
  // 파일명에서 대소문자 구분 없이 하이픈으로 변환
  const iconName = path.split('/').pop().replace('.vue', '').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  customIcons[iconName] = module.default;
  console.log(`Registered icon: ${iconName}`); // 등록된 아이콘 확인
})

// 3) Vuetify에서 사용할 custom 아이콘 세트 정의
const custom = {
  component: (props) => {
    const iconName = props.icon;  // props.icon 그대로 사용
    console.log('iconName:', iconName); // iconName 값 확인

    const IconComponent = customIcons[iconName];
    if (!IconComponent) {
      console.error(`Icon component for "${iconName}" not found.`);
      return null; // 아이콘이 없으면 렌더링하지 않음
    }

    return h(IconComponent);
  }
}

export { custom }
