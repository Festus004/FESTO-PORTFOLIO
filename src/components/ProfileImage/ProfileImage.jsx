import { useMemo } from 'react';

const profileImageModules = import.meta.glob('/src/assets/profile/*.{png,jpg,jpeg,jfif,webp,svg}', {
  eager: true,
  import: 'default',
});

const preferredNames = [
  'profile.png',
  'profile.jpg',
  'profile.jpeg',
  'profile.webp',
  'profile.svg',
  'avatar.png',
  'avatar.jpg',
  'avatar.webp',
  'avatar.svg',
  'photo.png',
  'photo.jpg',
  'photo.webp',
  'photo.svg',
  'me.png',
  'me.jpg',
  'me.webp',
  'me.svg',
];

function ProfileImage({ alt = 'Profile photo', fallbackText = 'FE', className = '' }) {
  const src = useMemo(() => {
    const matches = Object.entries(profileImageModules)
      .map(([path, url]) => ({ path, url }))
      .filter(({ path }) => /\.(png|jpe?g|jfif|webp|svg)$/i.test(path));

    if (!matches.length) {
      return null;
    }

    const preferred = matches.find(({ path }) => {
      const fileName = path.split('/').pop()?.toLowerCase() ?? '';
      return preferredNames.includes(fileName);
    });

    return preferred?.url ?? matches[0].url;
  }, []);

  return (
    <div className={`profile-image-shell ${className}`.trim()}>
      {src ? (
        <img src={src} alt={alt} className="profile-image" />
      ) : (
        <div className="profile-image-fallback" aria-hidden="true">
          <span>{fallbackText}</span>
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
