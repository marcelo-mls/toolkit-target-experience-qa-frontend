// ARQUIVO TEMPORÁRIO!!!
// Essa implementação foi feita apenas para garantir que o toolkit continue funcionando durante a fase de migração da estrutura de atividades do target

export function sortApiResponse(response) {
  response.sort((a, b) => {
    // Primeiro critério: ordenar pelo campo 'scheduling' (string) em ordem alfabética
    if (a.scheduling < b.scheduling) return -1;
    if (a.scheduling > b.scheduling) return 1;
  
    // Segundo critério: ordenar pelo campo 'priority' (número) em ordem decrescente
    if (a.priority > b.priority) return -1;
    if (a.priority < b.priority) return 1;
  
    // Terceiro critério: ordenar pelo campo 'startsAt' (data/hora) em ordem crescente
    const dateA = new Date(a.startsAt);
    const dateB = new Date(b.startsAt);
    return dateA - dateB;
  });
}

export function sortByPriorityAndStartDate(array) {
  return array.sort((a, b) => {

    const startDateA = new Date(a.scheduling.startsAt || 0);
    const startDateB = new Date(b.scheduling.startsAt || 0);

    if (b.ordination.priority === a.ordination.priority) {
      return startDateA - startDateB;
    }
    return b.ordination.priority - a.ordination.priority;
  });
}

export function unifySpaceData(groupedActivities) {
  try {
    const hasPipe = groupedActivities[0].name.includes('|');
    const hasParentheses = (groupedActivities[0].name.includes('(') || groupedActivities[0].name.includes(')'));
  
    if (!hasPipe && hasParentheses) {
      return groupedActivities;
    }
  
    const [mainTitle] = groupedActivities[0].name.split(' | ');
    const modularActivities = [];
    const live = {
      id: [],
      name: `Experiências ativas | ${mainTitle}`,
      state: 'approved',
      priority: 0,
      startsAt: '',
      endsAt: '',
      options: []
    };
    const scheduled = {
      id: [],
      name: `Experiências agendadas | ${mainTitle}`,
      state: 'approved',
      priority: 0,
      startsAt: '',
      endsAt: '',
      options: []
    };
  
    groupedActivities.forEach((activity) => {
      const optionsWithInheritedActivityName = activity.options.map((o) => ({...o, activityName: activity.name}));
      if (activity.scheduling === 'live') {
        live.id.push(activity.id);
        live.options.push(...optionsWithInheritedActivityName);
      } else if (activity.scheduling === 'scheduled') {
        scheduled.id.push(activity.id);
        scheduled.options.push(...optionsWithInheritedActivityName);
      }
    });
  
    sortByPriorityAndStartDate(live.options), 
    modularActivities.push(live);
  
    if (scheduled.options.length) {
      sortByPriorityAndStartDate(scheduled.options),
      modularActivities.push(scheduled);
    }
  
    return modularActivities;
  } catch (error) {
    console.error(error);
    return {status: 500, message: 'Parece ser um erro interno do servidor. Tente recarregar a página.'};
  }
}