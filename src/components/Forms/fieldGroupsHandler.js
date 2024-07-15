import React, { useMemo } from "react";

export const FieldGroupsHandler = (formFields, schemaGroups) => {
  const memorizedGroupStates = useMemo(
    () =>
      schemaGroups && schemaGroups?.length > 0
        ? new Map(schemaGroups.map((group) => [group, false]))
        : new Map(),
    [schemaGroups]
  );

  const [groupStates, setGroupStates] = React.useState(memorizedGroupStates);

  const updateGroupState = (groupName) => {
    setGroupStates(
      new Map(groupStates.set(groupName, !groupStates.get(groupName)))
    );
  };
  const handleExpandAllGroupState = () => {
    setGroupStates(new Map(schemaGroups.map((group) => [group, true])));
  };
  const handleCollapseAllGroupState = () => {
    setGroupStates(new Map(schemaGroups.map((group) => [group, false])));
  };

  const groupedFields = [];
  schemaGroups?.length > 0 &&
    schemaGroups?.map((group) => {
      groupedFields.push({
        key: group,
        value: formFields.filter((formField) => formField.group === group),
      });
    });

  return {
    groupedFields,
    groupStates,
    updateGroupState,
    handleExpandAllGroupState,
    handleCollapseAllGroupState,
  };
};
