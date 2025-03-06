type PremiumMarkProps = {
  block: 'place-card' | 'offer';
};

function PremiumMark({ block }: PremiumMarkProps) {
  return (
    <div className={`${block}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumMark;
