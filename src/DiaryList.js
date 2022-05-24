import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem onEdit={onEdit} key={it.id} {...it} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
