import React from 'react';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';
import { SocialProfileWrapper, SocialProfileItem } from './socialProfile.style';

const SocialProfile = ({ items, className, iconSize }) => {
  const addAllClasses = ['social_profiles'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <SocialProfileWrapper className={addAllClasses.join(' ')}>
      {items.map((item, index) => (
        <SocialProfileItem
          key={`social-item-${index}`}
          className="social_profile_item"
        >
          <Link href={item.url || '#'}>
            <a>
              <Icon
                icon={item.icon || socialLinkedin}
                size={iconSize || 22}
              />
            </a>
          </Link>
        </SocialProfileItem>
      ))}
    </SocialProfileWrapper>
  );
};

export default SocialProfile;
