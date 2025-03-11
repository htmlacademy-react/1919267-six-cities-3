type PremiumMarkProps = {
  block: 'place-card' | 'offer';
  isPremium: boolean;
};

function PremiumMark({ block, isPremium }: PremiumMarkProps) {
  return (
    <div className={isPremium ? `${block}__mark` : 'visually-hidden'}>
      <span>{isPremium ? 'Premium' : null}</span>
    </div>
  );
}

export default PremiumMark;
