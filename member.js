function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'moduels/skills/views/member.html',
        controller: 'SkillMemberController',
        controller: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
    

}